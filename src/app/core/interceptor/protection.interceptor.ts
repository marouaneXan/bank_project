import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, from } from 'rxjs';
import { catchError, filter, switchMap, take, retry } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';
import { TokenService } from '../services/token.service';

@Injectable()
export class ProtectionInterceptor implements HttpInterceptor {

  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private oauthService: OAuthService, private tokenService: TokenService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const accessToken = this.oauthService.getAccessToken();
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 403 && error.statusText === "Forbidden") {
          return this.handle403Error(request, next).pipe(retry(3));
        } else if (error.status === 401 && error.statusText === "Unauthorized") {
          return this.handle401Error(request, next);
        }
        return throwError(error);
      })
    );
  }

  private handle403Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.oauthService.getAccessToken();
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return next.handle(request);
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.refreshTokenInProgress) {
      this.refreshTokenInProgress = true;
      this.refreshTokenSubject.next(null);
      return from(this.oauthService.refreshToken()).pipe(
        switchMap(() => {
          this.refreshTokenInProgress = false;
          this.refreshTokenSubject.next(true);
          const accessToken = this.oauthService.getAccessToken();
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          return next.handle(request);
        }),
        catchError((error: HttpErrorResponse) => {
          this.refreshTokenInProgress = false;
          this.oauthService.logOut();
          return throwError(error);
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(result => result !== null),
        take(1),
        switchMap(() => {
          const accessToken = this.oauthService.getAccessToken();
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${accessToken}`
            }
          });
          return next.handle(request);
        })
      );
    }
  }
}

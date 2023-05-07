import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, from } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
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
        if (error.status === 401 && error.statusText === "Unauthorized") {
          return this.handle401Error(request, next);
        }
        return throwError(error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.refreshTokenInProgress) {
      this.refreshTokenInProgress = true;
      this.refreshTokenSubject.next(null);

      return from(this.oauthService.refreshToken()).pipe(
        switchMap(() => {
          this.refreshTokenInProgress = false;
          this.refreshTokenSubject.next(this.oauthService.getAccessToken());
          return this.refreshTokenSubject.pipe(
            filter(token => token !== null),
            take(1),
            switchMap(token => {
              request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`
                }
              });
              return next.handle(request);
            })
          );
        }),
        catchError((error: HttpErrorResponse) => {
          this.refreshTokenInProgress = false;
          this.oauthService.logOut();
          return throwError(error);
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token !== null),
        take(1),
        switchMap(token => {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
          return next.handle(request);
        })
      );
    }
  }
}

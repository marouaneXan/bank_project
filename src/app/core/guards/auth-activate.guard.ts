import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthActivateGuard implements CanActivate {
  constructor(private tokenService: TokenService, private oauthService: OAuthService, private router: Router, private authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    var hasIdToken = this.oauthService.hasValidIdToken()
    var hasAccessToken = this.oauthService.hasValidAccessToken()
    if (hasIdToken && hasAccessToken) {
      console.log(hasIdToken);
      return true
    }
    else {
      this.authService.changeStatus(false)
      console.log("redirecting to login");
      this.router.navigateByUrl('auth/sign-in')
      return false
    }
  }

}

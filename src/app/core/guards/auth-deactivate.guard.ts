import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthDeactivateGuard implements CanActivate {
  constructor(private oauthService: OAuthService, private router: Router, private authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    var hasIdToken = this.oauthService.hasValidIdToken()
    var hasAccessToken = this.oauthService.hasValidAccessToken()
    if (hasAccessToken && hasIdToken) {
      this.router.navigateByUrl('/admin')
      this.authService.changeStatus(true)
      return false
    }
    return true
  }

}

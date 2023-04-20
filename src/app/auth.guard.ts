// src/app/auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { KeycloakService } from './core/services/keycloak.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private oauthService: KeycloakService, private router: Router) {}
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
      if (this.oauthService.accessToken() != null) {
        return true;
      }
      this.router.navigate(['auth/sign-in']);
      return false;
    }
  }

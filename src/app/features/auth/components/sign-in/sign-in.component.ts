import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { TokenService } from 'src/app/core/services/token.service';
import { authCodeFlowConfig } from 'src/app/sso-config';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {
  loading = false;
  showError = false;
  constructor(private oauthService: OAuthService, private router: Router, private tokenService: TokenService) { }

  async configureSSO() {
    this.oauthService.configure(authCodeFlowConfig);
    try {
      await this.oauthService.loadDiscoveryDocumentAndTryLogin();
      if (this.oauthService.hasValidAccessToken()) {
        this.router.navigateByUrl('admin');
      }
    } catch (error) {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
    } finally {
      this.loading = false;
    }

    this.oauthService.events.subscribe(event => {
      if (event instanceof OAuthSuccessEvent && event.type === 'token_received') {
        console.log(event.type);
        this.router.navigateByUrl('admin');
      }
    });
  }

  login() {
    this.loading = true;
    this.oauthService.initCodeFlow();
    this.configureSSO()
  }
  logout() {
    this.oauthService.logOut()
  }
}

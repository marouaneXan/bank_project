import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, OAuthSuccessEvent } from 'angular-oauth2-oidc';
import { ToastrService } from 'ngx-toastr';
import { authCodeFlowConfig } from 'src/app/sso-config';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  loading = false;
  showError = false;
  showSuccess = false;
  constructor(private oauthService: OAuthService, private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {
    this.configureSSO()
  }
  async configureSSO() {
    this.oauthService.configure(authCodeFlowConfig);
    try {
      await this.oauthService.loadDiscoveryDocumentAndTryLogin();
      if (this.oauthService.hasValidAccessToken()) {
        this.toastr.success('Successfully logged in.');
        this.router.navigateByUrl('admin');
      }
    } catch (error) {
      this.toastr.error('Error connecting to Keycloak. Please try again later.')
    } finally {
      this.loading = false;
    }

    this.oauthService.events.subscribe((event) => {
      if (event instanceof OAuthSuccessEvent && event.type === 'token_received') {
        this.router.navigateByUrl('admin');
      }
    });
  }

  login() {
    this.loading = true;
    this.oauthService.initCodeFlow();
  }
  logout() {
    this.oauthService.logOut()
  }
}

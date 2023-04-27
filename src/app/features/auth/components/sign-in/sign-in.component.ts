import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { TokenService } from 'src/app/core/services/token.service';
import { authCodeFlowConfig } from 'src/app/sso-config';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  constructor(private oauthService: OAuthService, private router: Router, private tokenService: TokenService) { }
  ngOnInit(): void {
    this.configureSSO()
  }
  configureSSO() {
    this.oauthService.configure(authCodeFlowConfig)
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler()
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => this.router.navigateByUrl('admin'))
  }
  login() {
    this.oauthService.initCodeFlow()
  }
  logout() {
    this.oauthService.logOut()
  }
}

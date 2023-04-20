import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService, OAuthModule } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { TokenService } from 'src/app/core/services/token.service';
import { authCodeFlowConfig } from 'src/app/sso-config';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  name: string = ''
  constructor(private oauthService: OAuthService, private router: Router, private tokenService: TokenService) { }
  ngOnInit(): void {
    this.configureSSO()
    const userClaims: any = this.oauthService.getIdentityClaims()
    this.name = userClaims?.name ? userClaims?.name : ''
    console.log(this.tokenService.getAccessToken());
    // this.logout()
  }
  configureSSO() {
    this.oauthService.configure(authCodeFlowConfig)
    this.oauthService.tokenValidationHandler = new JwksValidationHandler()
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
  }
  login() {
    this.oauthService.initCodeFlow()
    this.router.navigateByUrl('/admin/transaction')
    // this.tokenService.setDataToLocalStorage(this.getAccessToken())
  }
  logout() {
    this.oauthService.logOut()
  }
  getAccessToken(): string {
    return this.oauthService.getAccessToken();
  }
}

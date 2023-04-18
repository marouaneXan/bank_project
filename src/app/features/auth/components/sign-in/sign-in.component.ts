import { Component, OnInit } from '@angular/core';
import { OAuthService, OAuthModule } from 'angular-oauth2-oidc';
import { authConfig } from 'src/app/sso-config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  ngOnInit(): void {
  }
}

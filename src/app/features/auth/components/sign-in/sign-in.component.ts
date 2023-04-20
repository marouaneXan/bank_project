import { Component, OnInit } from '@angular/core';
import { OAuthService} from 'angular-oauth2-oidc';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  constructor(private oauthService: OAuthService) {}
  ngOnInit(): void {
   this.login();
   }
    login(): void {
      this.oauthService.initCodeFlow();
    }
}

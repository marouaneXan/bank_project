import { Component, OnInit } from '@angular/core';
import { OAuthService, OAuthModule } from 'angular-oauth2-oidc';
import {authCodeFlowConfig} from './sso.config';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {





  constructor(private oauthService: OAuthService) {}
  ngOnInit(): void {
    this.config();
  }

    config(): void {
      this.oauthService.configure(authCodeFlowConfig);
      this.oauthService.loadDiscoveryDocumentAndLogin();
      this.oauthService.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe((_) => this.oauthService.loadUserProfile());
    }
}

// src/app/protected/protected.component.ts
import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css'],
})
export class ProtectedComponent implements OnInit {
  username: string | undefined;

  constructor(private oauthService: OAuthService) {}

  async ngOnInit(): Promise<void> {
  }

  logout(): void {
    this.oauthService.logOut();
  }
}

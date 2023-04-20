import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;

  constructor(private oauthService: OAuthService) {}

  async ngOnInit(): Promise<void> {
  }

  logout(): void {
    this.oauthService.logOut();
  }
}

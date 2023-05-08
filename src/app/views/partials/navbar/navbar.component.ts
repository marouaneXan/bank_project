import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;
  agence_name: string = ''
  constructor(private tokenService: TokenService, private router: Router, private oauthService: OAuthService) { }
  signOut() {
    this.oauthService.logOut()
    this.router.navigateByUrl('auth/sign-in')
  }
  ngOnInit() {
    const agenceClaims: any = this.oauthService.getIdentityClaims()
    this.agence_name = agenceClaims.name ? agenceClaims.name : ''
    console.log(agenceClaims);
  }
}

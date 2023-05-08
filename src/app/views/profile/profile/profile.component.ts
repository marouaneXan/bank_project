import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLoading=false
  isDisabled=false
  agence_info:any=[]
  constructor(private oauthService:OAuthService){}
  ngOnInit(): void {
    this.getAgenceInfo()
    console.log(this.agence_info);
  }
  getAgenceInfo(){
    this.isLoading=true
    const agenceClaims: any = this.oauthService.getIdentityClaims()
    this.agence_info=agenceClaims
    this.isLoading=false
  }
}

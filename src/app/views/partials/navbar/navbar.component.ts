import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private tokenService:TokenService,private router:Router) { }
  signOut(){
    this.tokenService.clearLocalStorage()
    this.router.navigateByUrl('/auth/sign-in')
  }

  ngOnInit() { }
}

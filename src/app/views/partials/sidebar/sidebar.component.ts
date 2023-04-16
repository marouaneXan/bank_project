import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isList: number = 0;
  isMenu: boolean = false;
  isSearch: boolean = false;
  activeLinkIndex: number = 0;
  constructor() { }

  sidebarLinks = [
    {
      path: '/admin',
      name: 'Dashboard',
      icon:'fa-solid fa-gauge'
    },
    {
      path: '/admin/transactions',
      name: 'Transactions',
      icon:'fa-solid fa-credit-card'
    },
    {
      path: '/admin/transactions/create',
      name: 'Add Transaction',
      icon:'fa-solid fa-person-circle-check'
    },
    {
      path: '/admin/profile',
      name: 'Profile',
      icon:'fa-solid fa-user'
    },
  ]
  ngOnInit() {
    const activeLinkIndex = localStorage.getItem('activeLinkIndex');
    if (activeLinkIndex) {
      this.activeLinkIndex = +activeLinkIndex;
    }
  }

  setActiveLink(index: number) {
    this.activeLinkIndex = index;
    console.log('index:', this.activeLinkIndex);
    localStorage.setItem('activeLinkIndex', String(index));
  }
}

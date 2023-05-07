import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

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
  constructor(private router: Router) { }

  sidebarLinks = [
    {
      path: '/admin',
      name: 'Dashboard',
      icon: 'fa-solid fa-gauge'
    },
    {
      path: '/admin/transactions',
      name: 'Transactions',
      icon: 'fa-solid fa-credit-card'
    },
    {
      path: '/admin/transactions/create',
      name: 'Add Transaction',
      icon: 'fa-solid fa-person-circle-check'
    },
    {
      path: '/admin/profile',
      name: 'Profile',
      icon: 'fa-solid fa-user'
    },
  ]
  ngOnInit() {
    const activeLinkIndex = localStorage.getItem('activeLinkIndex');
    if (activeLinkIndex) {
      this.activeLinkIndex = +activeLinkIndex;
    }

    this.setActiveLinkIndex();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.setActiveLinkIndex();
      });
  }



  setActiveLink(index: number) {
    this.activeLinkIndex = index;
    localStorage.setItem('activeLinkIndex', String(this.activeLinkIndex));
  }
  setActiveLinkByUrl(url: string) {
    const index = this.sidebarLinks.findIndex((link) => url.includes(link.path));
    if (index !== -1) {
      this.setActiveLink(index);
    }
  }
  setActiveLinkIndex() {
    const activeIndex = this.sidebarLinks.findIndex((link) => this.router.isActive(link.path, true));
    if (activeIndex !== -1) {
      this.activeLinkIndex = activeIndex;
    }
  }

}

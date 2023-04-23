import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    {
      title: 'number of transactions',
      statistic: 12,
      icon: 'fa-solid fa-credit-card'
    },
    {
      title: 'today transactions',
      statistic: 12,
      icon: 'fa-solid fa-person-circle-check'
    },
    {
      title: 'deleted transactions',
      statistic: 12,
      icon: 'fa-solid fa-trash'
    },
    {
      title: 'types',
      statistic: 12,
      icon: 'fa-solid fa-bolt'
    }
  ]
}

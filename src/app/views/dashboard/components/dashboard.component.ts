import { Component } from '@angular/core';
import { TransactionService } from 'src/app/features/transaction/services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  transactions = 0;
  todayTransactions = 0;
  deletedTransactions = 0;
  addedTransactions = 0;
  cards = [
    {
      title: 'number of transactions',
      statistic: this.transactions,
      icon: 'fa-solid fa-credit-card'
    },
    {
      title: 'today transactions',
      statistic: this.todayTransactions,
      icon: 'fa-solid fa-person-circle-check'
    },
    {
      title: 'deleted transactions',
      statistic: this.deletedTransactions,
      icon: 'fa-solid fa-trash'
    },
    {
      title: 'total amount',
      statistic: this.addedTransactions,
      icon: 'fa-solid fa-money-check-dollar'
    }
  ];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.statistics();
  }

  statistics() {
    this.transactionService.getListTransaction().subscribe(
      (res: any) => {
        console.log(res);
        this.transactions = res.length;
        this.deletedTransactions = this.transactionService.getDeletedTransactionCount();
        this.addedTransactions = this.transactionService.getAddedTransactionCount();
        this.cards[0].statistic = this.transactions;
        this.cards[1].statistic = this.todayTransactions;
        this.cards[2].statistic = this.deletedTransactions;
        this.cards[3].statistic = this.addedTransactions;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}

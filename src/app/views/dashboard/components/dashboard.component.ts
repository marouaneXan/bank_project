import { Component } from '@angular/core';
import { TransactionService } from 'src/app/features/transaction/services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  transactions = 0;
  deletedTransactions = 0;
  addedTransactions = 0;
  loading = false
  cards = [
    {
      title: 'number of transactions',
      statistic: this.transactions,
      icon: 'fa-solid fa-credit-card'
    },
    {
      title: 'today transactions',
      statistic: this.addedTransactions,
      icon: 'fa-solid fa-person-circle-check'
    },
    {
      title: 'deleted transactions',
      statistic: this.deletedTransactions,
      icon: 'fa-solid fa-trash'
    },
    {
      title: 'deleted transactions',
      statistic: this.deletedTransactions,
      icon: 'fa-solid fa-money-check-dollar'
    }
  ];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.statistics();
    this.getTotalTransactions()
  };

  statistics() {
    this.loading = true
    this.transactionService.getListTransaction().subscribe(
      (res: any) => {
        this.loading = false
        this.addedTransactions = this.transactionService.getTodayTransactionCount(res);
      },
      (error: any) => {
        this.loading = false
        console.error(error);
      }
    );
  }
  getTotalTransactions() {
    this.transactionService.getTotalTransactions().subscribe(
      res => {
        console.log(res);
        this.transactions=res
        this.cards[0].statistic = this.transactions;
      }
    )
  }
}
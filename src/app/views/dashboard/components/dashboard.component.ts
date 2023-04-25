import { Component } from '@angular/core';
import { TransactionService } from 'src/app/features/transaction/services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  transactions = 0
  todayTransactions = 0
  deletedTransactions = 0
  addedTransactions = 0
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
      title: 'deleted transactions',
      statistic: this.deletedTransactions,
      icon: 'fa-solid fa-bolt'
    }
  ]
  ngOnInit(): void {
    this.statistics()
  }
  constructor(private transactionService: TransactionService) { }
  statistics() {
    this.transactionService.getListTransaction().subscribe(
      (res: any) => {
        this.transactions = res.length
        this.deletedTransactions = this.transactionService.getDeletedTransactionCount()
        this.addedTransactions = this.transactionService.getAddedTransactionCount()
        this.cards[0].statistic = this.transactions;
        this.cards[0].statistic = this.deletedTransactions
        this.cards[0].statistic = this.addedTransactions
      }
    )
  }
}

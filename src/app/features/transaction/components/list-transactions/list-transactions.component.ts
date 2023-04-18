import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent {
  listTransaction: any;
  modalDeleteTransaction: boolean = false
  transactionSelected: any
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransactions()
  }
  getTransactions() {
    this.transactionService.getListTransaction().subscribe((Transaction) => {
      this.listTransaction = Transaction
    })
  }
  togglemodalDeleteTransaction(): void {
    this.modalDeleteTransaction = !this.modalDeleteTransaction
  }

}


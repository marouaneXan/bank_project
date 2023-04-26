import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent {
  listTransaction: any;
  modalDeleteTransaction: boolean = false
  transactionSelected: any
  isLoading = false
  today = new Date()
  constructor(private transactionService: TransactionService, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.getTransactions()
  }
  getTransactions() {
    this.isLoading = true
    this.loadingService.show()
    this.transactionService.getListTransaction().subscribe((Transaction) => {
      this.listTransaction = Transaction
      this.isLoading = false
      this.loadingService.hide()
    },
      (err) => {
        this.isLoading = false;
        this.loadingService.hide();
      })
  }
  togglemodalDeleteTransaction(): void {
    this.modalDeleteTransaction = !this.modalDeleteTransaction
  }

}

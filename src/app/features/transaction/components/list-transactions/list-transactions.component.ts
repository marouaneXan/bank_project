import { Component } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Transaction } from '../../interface/transaction';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent {
  listTransaction: Transaction[] = [];
  modalDeleteTransaction: boolean = false
  transactionSelected: any
  isLoading = false
  today = new Date()
  filteredTransactions: Transaction[] | Transaction = [];
  searchQuery: string = '';
  emptyTransactionsList: string = ''
  constructor(private transactionService: TransactionService, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.getTransactions()
    this.status()
  }
  getTransactions() {
    this.isLoading = true
    this.loadingService.show()
    this.transactionService.getListTransaction().subscribe((Transaction) => {
      this.listTransaction = Transaction as Transaction[]
      this.isLoading = false
      this.loadingService.hide()
      this.emptyTransactionsList = "";
    },
      (err) => {
        this.isLoading = false;
        this.loadingService.hide();
        this.emptyTransactionsList = "You don't make any transactions yet";
      })
  }
  togglemodalDeleteTransaction(): void {
    this.modalDeleteTransaction = !this.modalDeleteTransaction
  }

<<<<<<< HEAD
  status() {
    this.transactionService.serverUpDown().subscribe(
      res => console.log(res)
    )
  }
  searchTransactions() {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      this.transactionService.getListTransaction().subscribe((Transaction) => {
        this.listTransaction = Transaction as Transaction[]
      })
    }
    else {
      this.listTransaction = this.listTransaction.filter((item: Transaction) => item.sourceAccount.toLocaleLowerCase().includes(query) || item.sourceAccount.toLocaleLowerCase() === query.toLocaleLowerCase());
    }
  }

}
=======
}
>>>>>>> test

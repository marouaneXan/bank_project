import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-delete-transaction',
  templateUrl: './delete-transaction.component.html',
  styleUrls: ['./delete-transaction.component.css']
})
export class DeleteTransactionComponent {
  @Input() modalDeleteTransaction: boolean = false
  @Input() togglemodalDeleteTransaction = (): void => { }
  @Input() transactionSelected: any
  @Output() onDeleteTransaction = new EventEmitter()
  isLoading = false

  constructor(private transactionService: TransactionService, private toastr: ToastrService, private loadingService: LoadingService) { }

  deleteTransaction(transaction_id: number) {
    this.isLoading = true
    this.loadingService.show()
    console.log(transaction_id);
    this.transactionService.deleteTransaction(transaction_id).subscribe(
      (res: any) => {
        this.isLoading = false
        this.loadingService.hide()
        this.modalDeleteTransaction = false
        this.toastr.success('Transaction deleted successfully')
        this.onDeleteTransaction.emit()
      },
      err => {
        this.isLoading = false;
        this.loadingService.hide();
        this.toastr.error('Error on deleting transaction')
      }
    )
  }
}

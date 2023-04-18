import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private transactionService: TransactionService, private toastr: ToastrService) { }

  deleteTransaction(transaction_id: string) {
    console.log(transaction_id);
    this.transactionService.deleteTransaction(transaction_id).subscribe(
      (res: any) => {
        this.modalDeleteTransaction = false
        this.toastr.success('Transaction deleted successfully')
        this.onDeleteTransaction.emit()
      },
      err => {
        this.toastr.error('Error on deleting transaction')
      }
    )
  }
}

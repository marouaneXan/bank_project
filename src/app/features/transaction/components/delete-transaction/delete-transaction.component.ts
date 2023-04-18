import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-delete-transaction',
  templateUrl: './delete-transaction.component.html',
  styleUrls: ['./delete-transaction.component.css']
})
export class DeleteTransactionComponent {
  @Input() modalDeleteTransaction: boolean = false
  @Input() togglemodalDeleteTransaction = (): void => { }
  @Input() transactionSelected: any
}

import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css']
})
export class ViewTransactionComponent {
  @Input() title: string="";
  @Input() transactionData: any=[];
}
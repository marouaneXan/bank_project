import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { PartialsModule } from 'src/app/views/partials/partials.module';



@NgModule({
  declarations: [
    ListTransactionsComponent,
    AddTransactionComponent
  ],
  imports: [
    CommonModule,
    PartialsModule
  ]
})
export class TransactionModule { }

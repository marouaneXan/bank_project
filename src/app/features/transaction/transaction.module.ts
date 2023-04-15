import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { PartialsModule } from 'src/app/views/partials/partials.module';
import { TransactionRoutingModule } from './transaction-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListTransactionsComponent,
    AddTransactionComponent
  ],
  imports: [
    CommonModule,
    PartialsModule,
    TransactionRoutingModule,
    ReactiveFormsModule
  ]
})
export class TransactionModule { }

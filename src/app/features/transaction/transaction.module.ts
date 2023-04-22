import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { PartialsModule } from 'src/app/views/partials/partials.module';
import { TransactionRoutingModule } from './transaction-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from '../spinner/spinner.module';
import { DeleteTransactionComponent } from './components/delete-transaction/delete-transaction.component';



@NgModule({
  declarations: [
    ListTransactionsComponent,
    AddTransactionComponent,
    DeleteTransactionComponent
  ],
  imports: [
    CommonModule,
    PartialsModule,
    TransactionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpinnerModule
  ]
})
export class TransactionModule { }

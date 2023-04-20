import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { PartialsModule } from 'src/app/views/partials/partials.module';
import { TransactionRoutingModule } from './transaction-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerModule } from '../spinner/spinner.module';
import {DataTablesModule } from 'angular-datatables';
import { DeleteTransactionComponent } from './components/delete-transaction/delete-transaction.component';
import { GlobalModalComponent } from '../global-modal/global-modal.component';
import { ViewTransactionComponent } from './components/view-transaction/view-transaction.component';

@NgModule({
  declarations: [
    ListTransactionsComponent,
    AddTransactionComponent,
    DeleteTransactionComponent,
    GlobalModalComponent,
    ViewTransactionComponent
    ],
  imports: [
    CommonModule,
    PartialsModule,
    TransactionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpinnerModule,
    DataTablesModule,
    ]
})
export class TransactionModule { }

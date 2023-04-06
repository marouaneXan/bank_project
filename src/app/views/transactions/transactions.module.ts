import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { PartialsModule } from '../partials/partials.module';



@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    PartialsModule
  ]
})
export class TransactionsModule { }

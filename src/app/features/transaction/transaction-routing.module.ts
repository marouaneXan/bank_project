import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';

const routes: Routes = [
  {
    path:'create',
    component:AddTransactionComponent
  },
  {
    path:'',
    component:ListTransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      { path: 'transactions', loadChildren: () => import('../features/transaction/transaction.module').then(m => m.TransactionModule) },
      { path: '', loadChildren: () => import('../views/dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }

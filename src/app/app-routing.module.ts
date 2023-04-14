import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './component/login/login.component'
import { LayoutComponent } from './component/layout/layout.component'
import { TransactionFormComponent } from './component/dashboard/transaction-form/transaction-form.component'

const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
      path : '', component: LayoutComponent,
      children: [
        {
          path: 'add-transaction', component: TransactionFormComponent
        }
      ]
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

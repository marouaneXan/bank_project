import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }
        ],
    },
    {
        path: 'transactions',
        children: [
            { path: '', loadChildren: () => import('./views/transactions/transactions.module').then(m => m.TransactionsModule) }
        ],
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
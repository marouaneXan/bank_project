import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthActivateGuard } from './core/guards/auth-activate.guard'

const routes: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) }
        ],
    },
    {
        path: 'admin',
        canActivate: [AuthActivateGuard],
        children: [
            { path: '', loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule) }
        ],
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
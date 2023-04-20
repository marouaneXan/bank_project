// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthDeactivateGuard } from './core/guards/auth-deactivate.guard';
import { AuthGuard } from './auth.guard';
import { ProtectedComponent } from './protected/protected.component'; // Import ProtectedComponent

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthDeactivateGuard],
    children: [
      { path: '', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
    ],
  },
  {
    path: '**',
    redirectTo: 'admin/transactions',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule) },
    ],
  },
  {
    path: 'protected', // Add a new route for ProtectedComponent
    component: ProtectedComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

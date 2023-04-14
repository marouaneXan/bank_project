import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TitleComponent } from './component/dashboard/title/title.component';
import { TransactionFormComponent } from './component/dashboard/transaction-form/transaction-form.component';
import { SidebarComponent } from './component/layout/sidebar/sidebar.component';
import { NavBarComponent } from './component/layout/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    TitleComponent,
    TransactionFormComponent,
    SidebarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

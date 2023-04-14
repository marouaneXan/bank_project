import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TitleComponent } from './component/dashboard/title/title.component';
import { TransactionFormComponent } from './component/dashboard/transaction-form/transaction-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    TitleComponent,
    TransactionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

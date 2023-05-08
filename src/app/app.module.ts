import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { OAuthModule } from 'angular-oauth2-oidc';
import { ProtectionInterceptor } from './core/interceptor/protection.interceptor';
import { WebSocketService } from './core/services/websocket.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
     HttpClientModule,
     OAuthModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ProtectionInterceptor,
      multi: true,
    },
    WebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

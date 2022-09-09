import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // must be imported for [(ngModel)] directive
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthInterceptorService } from './auth-interceptor.service';
import { LoggingInterceptorService } from './logging-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    // depedency injection syntax NOTE: ORDER OF INTERCEPTORS MATTER
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService, // SECOND
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService, // FIRST
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

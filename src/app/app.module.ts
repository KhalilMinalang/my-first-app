import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { FormsModule } from '@angular/forms'; // must be imported for [(ngModel)] directive

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; // components must be imported first before declaring

@NgModule({
  declarations: [
    AppComponent,
    // components must be declared here in order for angular to recognize it
    ServerComponent,
    ServersComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

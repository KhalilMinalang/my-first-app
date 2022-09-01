import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // must be imported for [(ngModel)] directive
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

const appRoutes: Routes = [
  {
    path: '', // localhost:4200/
    component: HomeComponent,
  },
  {
    path: 'users', // localhost:4200/users
    component: UsersComponent,
  },
  // passing a parameter
  {
    path: 'users/:id/:name',
    component: UserComponent,
  },
  {
    path: 'servers', // localhost:4200/users
    component: ServersComponent,
  },
  {
    path: 'servers/:id',
    component: ServerComponent,
  },
  {
    path: 'servers/:id/edit',
    component: EditServerComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), // pass appRoutes as an argument
  ],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component } from '@angular/core';

@Component({
  // tag name
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // servers: any;
  // servers = [];
  servers: any = [];

  onAddServer() {
    this.servers.push('Another Server');
  }

  onRemoveServer(id: number) {
    // const position = id + 1;
    // my fix
    const position = id;
    this.servers.splice(position, 1);
  }
}

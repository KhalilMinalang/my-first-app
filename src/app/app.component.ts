import { Component } from '@angular/core';

@Component({
  // tag name
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // serverElements = [];
  // serverElements: any = [];

  serverElements = [
    {
      type: 'server',
      name: 'Testserver',
      content: 'Just a test!',
    },
  ];
  // serverElements: any = [];
}

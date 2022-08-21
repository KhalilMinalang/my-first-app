import { Component } from '@angular/core';

@Component({
  // tag name
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // data binding
  name = 'Max';
  title = 'title';
}

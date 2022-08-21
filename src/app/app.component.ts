import { Component } from '@angular/core';

@Component({
  // tag name
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: [
  //   './app.component.css',
  //   // you can add additional stylesheets here
  // ],
  // or you can pass CSS code as string:
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {
  // data binding
  name = 'Max';
  title = 'title';
}

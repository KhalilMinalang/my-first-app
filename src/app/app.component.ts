import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //
    function add(a: number, b: number) {
      return a + b;
    }

    const result = add(2, 5);

    console.log(result);
  }
}

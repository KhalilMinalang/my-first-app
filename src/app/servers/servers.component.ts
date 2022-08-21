import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // templateUrl: './servers.component.html',
  // you can also use string as template instead
  // template: '<app-server></app-server><app-server></app-server>',
  // using backticks
  template: ` <app-server></app-server><app-server></app-server> `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

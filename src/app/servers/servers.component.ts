import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // this will turn it from an 'element' into 'attribute'
  // selector: '[app-servers]',
  // this will turn into a class
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

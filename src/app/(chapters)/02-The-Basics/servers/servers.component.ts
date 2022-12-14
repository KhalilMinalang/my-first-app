import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // this will turn it from an 'element' into 'attribute'
  // selector: '[app-servers]',
  // this will turn into a class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // you can also use string as template instead
  // template: '<app-server></app-server><app-server></app-server>',
  // using backticks
  // template: ` <app-server></app-server><app-server></app-server> `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  username = '';

  // my solution
  displayParagraph = false;
  logs: Array<Number> = [];
  // max's solution
  showSecret = false;
  // log: Array<Number> = [];
  log: any = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  // you don't have to follow the naming convention, but it would've been better if you do
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    // implicit
    // this.serverName = event.target.value;
    // explicit
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  buttonClick() {
    this.displayParagraph = this.displayParagraph ? false : true;
    // this.logs.push(Date.now().toString());
    this.logs.push(this.logs.length + 1);
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}

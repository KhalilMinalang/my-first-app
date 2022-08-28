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

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      // name: this.newServerName,
      // content: this.newServerContent,
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      // name: this.newServerName,
      // content: this.newServerContent,
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onChangeFirst() {
    console.log('onChangeFirst called');
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}

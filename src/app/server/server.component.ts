// Component decorator must be imported
import { Component } from '@angular/core';

// decorators enhances the class
@Component({
  selector: 'app-server',
  templateUrl: './server-component.html',
})

// a component is actually a TS class angular is able to instantiate it would create an object based on the blueprint
export class ServerComponent {
  // implicit data type declaration
  // serverId = 10;
  // serverStatus = 'offline';

  // explicit data type declaration
  serverId: Number = 10;
  serverStatus: String = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}

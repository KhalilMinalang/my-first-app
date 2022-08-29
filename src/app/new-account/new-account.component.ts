import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';

import { LogginService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LogginService, AccountsService],
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  constructor(
    private loggingService: LogginService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });

    // const service = new LogginService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);

    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}

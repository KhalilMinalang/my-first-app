import { EventEmitter, Injectable } from '@angular/core';
import { LogginService } from './logging.service';

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdate = new EventEmitter<string>();

  constructor(private loggingService: LogginService) {}

  addAccount(name: string, status: string) {
    // console.log('addAccount: ', name);
    // console.log('addAccount: ', status);
    this.accounts.push({
      name: name,
      status: status,
    });
    // console.log(this.accounts);
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}

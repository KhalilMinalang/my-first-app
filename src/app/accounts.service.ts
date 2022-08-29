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

  addAccount(name: string, status: string) {
    console.log('addAccount: ', name);
    console.log('addAccount: ', status);
    this.accounts.push({
      name: name,
      status: status,
    });
    console.log(this.accounts);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}

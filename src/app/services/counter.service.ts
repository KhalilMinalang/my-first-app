import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  activeToInactive = 0;
  inactiveToActive = 0;

  countActiveToInactiveActions() {
    this.activeToInactive++;
    console.log('ActiveToInactiveActions ' + this.activeToInactive);
  }

  countInactiveToActiveActions() {
    this.inactiveToActive++;
    console.log('InactiveToActiveActions ' + this.inactiveToActive);
  }
}

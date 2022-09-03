import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // old approach
  // activatedEmitter = new EventEmitter<boolean>();
  // use subject instead
  activatedEmitter = new Subject<boolean>();
}

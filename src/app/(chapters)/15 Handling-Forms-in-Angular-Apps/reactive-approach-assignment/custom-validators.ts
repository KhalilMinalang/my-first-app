import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  // static so you won't have to re-instantiate
  static invalidProjectName(
    control: FormControl
  ): { [s: string]: boolean } | null {
    if (control.value == 'Test') {
      return { invalidProjectName: true };
    }
    return null;
  }

  static asyncInvalidProjectName(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          resolve({ nameIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}

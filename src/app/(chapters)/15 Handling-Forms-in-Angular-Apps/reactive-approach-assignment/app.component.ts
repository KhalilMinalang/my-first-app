import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AsyncValidatorFn,
  ValidatorFn,
} from '@angular/forms';
// import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // projectStatuses = ['stable', 'critical', 'finished'];
  projectForm!: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        // this.forbiddenName as AsyncValidatorFn
        CustomValidators.asyncInvalidProjectName as AsyncValidatorFn
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      // projectStatus: new FormControl(this.projectStatuses[0]),
      status: new FormControl('critical'),
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }

  // forbiddenName(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'Test') {
  //         resolve({ nameIsForbidden: true });
  //       } else {
  //         resolve(null);
  //       }
  //     }, 1500);
  //   });
  //   return promise;
  // }
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  // alternative way
  // signupForm = new FormGroup({
  //   // add controls
  //   username: new FormControl(null),
  //   email: new FormControl(null),
  //   gender: new FormControl('male'),
  // });

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        // add controls
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // fix 1
  // get hobbies() {
  //   return this.signupForm.get('hobbies') as FormArray;
  // }

  // fix 2
  // getControls() {
  //   return (<FormArray>this.signupForm.get('hobbies')).controls;
  // }

  // fix 3
  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
}

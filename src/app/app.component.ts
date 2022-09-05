import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}

import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Primitives: number, string , boolean
    // More complex types: arrays, objects
    // Function types, parameters

    // Primitives

    let age: number;

    age = 12;

    let userName: string | string[];

    userName = 'Max';

    let isInstructor: boolean;

    isInstructor = true;

    // More complex types

    let hobbies: string[];

    hobbies = ['Sports', 'Cooking'];

    type Person = {
      name: string;
      age: number;
    };

    // let person: any;
    // let person: {
    //   name: string;
    //   age: number;
    // };
    let person: Person;

    person = {
      name: 'Max',
      age: 32,
    };

    // person = {
    //   isEmployee: true,
    // };

    // let people: {
    //   name: 'Max';
    //   age: 32;
    // }[];
    let people: Person[];

    // Type inference
    let course: string | number = 'React - The Completed Guide';

    course = 12341;

    // Functions & types

    function add(a: number, b: number): number | string {
      return a + b;
    }

    function print(value: any): void {
      console.log(value);
    }
  }
}

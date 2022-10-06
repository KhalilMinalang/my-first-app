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

    // Generics

    function insertAtBeginning<T>(array: T[], value: T) {
      const newArray = [value, ...array];
      return newArray;
    }

    const demoArray = [1, 2, 3];

    const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
    const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

    // console.log(updatedArray);
    // console.log(stringArray);
    // updatedArray[0].split('');

    class Student {
      // firstName!: string;
      // lastName!: string;
      // age!: number;
      // private courses!: string[];

      constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
      ) {
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.courses = courses;
      }

      enroll(courseName: string) {
        this.courses.push(courseName);
      }

      listCourses() {
        return this.courses.slice();
      }
    }

    const student = new Student('Max', 'Schwarz', 32, ['Angular']);
    student.enroll('React');
    student.listCourses();

    console.log(student);
  }
}

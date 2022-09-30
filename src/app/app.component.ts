import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    //
    trigger('divState', [
      state(
        'normal',
        style({
          // backgroundColor
          'background-color': 'red',
          transform: 'translateX(0)',
        })
      ),
      state(
        'highlighted',
        style({
          // backgroundColor: 'blue',
          'background-color': 'blue',
          transform: 'translateX(100px)',
        })
      ),
      // transition('normal => highlighted', animate(300)),
      // transition('highlighted => normal', animate(800)),
      // previous 2 lines in one
      transition('normal <=> highlighted', animate(300)),
    ]),
    trigger('wildState', [
      state(
        'normal',
        style({
          // backgroundColor
          'background-color': 'red',
          transform: 'translateX(0) scale(1)',
        })
      ),
      state(
        'highlighted',
        style({
          // backgroundColor: 'blue',
          'background-color': 'blue',
          transform: 'translateX(100px)',
        })
      ),
      state(
        'shrunken',
        style({
          'background-color': 'green',
          transform: 'translateX(0) scale(0.5)',
        })
      ),
      // transition('normal <=> highlighted', animate(300)),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition(
        'shrunken <=> *',
        // animate(
        //   500,
        //   style({
        //     borderRadius: '50px',
        //   })
        // )
        // pass array instead
        [
          style({
            'background-color': 'orange',
          }),
          animate(
            1000,
            style({
              borderRadius: '50px',
            })
          ),
          animate(500),
        ]
      ),
    ]),
  ],
})
export class AppComponent {
  state = 'normal';
  // state = 'highlighted';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state == 'normal'
      ? (this.state = 'highlighted')
      : (this.state = 'normal');

    this.wildState == 'normal'
      ? (this.wildState = 'highlighted')
      : (this.wildState = 'normal');
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onAdd(item: any) {
    this.list.push(item);
  }

  onDelete(item: any) {
    return item;
  }
}

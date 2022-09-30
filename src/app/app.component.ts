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
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
    ]),
  ],
})
export class AppComponent {
  state = 'normal';
  // state = 'highlighted';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state == 'normal'
      ? (this.state = 'highlighted')
      : (this.state = 'normal');
  }

  onShrink() {}

  onAdd(item: any) {
    this.list.push(item);
  }

  onDelete(item: any) {
    return item;
  }
}

import {
  Component,
  OnInit,
  Input, // must be imported
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  // type definition
  // element: {
  //   type: string;
  //   name: string;
  //   content: string;
  // };
  // element!: { type?: string; name?: string; content?: string };
  // fix
  // @Input() element?: { type: string; name: string; content: string;}
  // @Input() element?: { type?: string; name?: string; content?: string };
  // final
  // @Input() element!: { type?: string; name?: string; content?: string };

  // assigning an 'alias'
  @Input('srvElement') element!: {
    type?: string;
    name?: string;
    content?: string;
  };

  constructor() {}

  ngOnInit(): void {}
}

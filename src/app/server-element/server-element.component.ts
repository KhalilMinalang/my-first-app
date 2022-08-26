import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef, // must be imported
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // default
  // encapsulation: ViewEncapsulation.None,
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
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
  //
  @Input() name!: string;
  @ViewChild('heading', { static: true })
  header!: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text Content: ', this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}

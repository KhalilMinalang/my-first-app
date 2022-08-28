import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private rednderer: Renderer2) {}

  ngOnInit(): void {
    this.rednderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'blue'
    );
  }
}

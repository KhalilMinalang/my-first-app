import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // assigning an 'alias' to an Output decorator
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = '';
  // newServerContent = '';
  // fix
  // newServerName: any = '';
  // newServerContent: any = '';
  // @ViewChild('serverContentInput') serverContentInput;
  @ViewChild('serverContentInput', { static: true })
  serverContentInput!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  //
  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
    // console.log(nameInput.value);
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      // serverContent: this.newServerContent,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.serverContentInput.nativeElement.value = ''; // BAD
    this.blueprintCreated.emit({
      // serverName: this.newServerName,
      serverName: nameInput.value,
      // serverContent: this.newServerContent,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
}

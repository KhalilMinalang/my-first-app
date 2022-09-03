import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription?: Subscription;

  constructor() {}

  ngOnInit() {
    // original
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    // cusutom version
    const customIntervalObersvable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObersvable.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription?.unsubscribe();
  }
}

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

        // completing the observer
        if (count == 5) {
          observer.complete();
        }

        // throw error
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }

        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObersvable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        // here, you could send it to your own back-end and store it in a database there
        console.log(error);
        alert(error.message);
      },
      // completed handler
      () => {
        console.log('Completed');
      }
    );
  }

  ngOnDestroy(): void {
    this.firstObsSubscription?.unsubscribe();
  }
}

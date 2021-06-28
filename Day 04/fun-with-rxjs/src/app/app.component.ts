import { Component } from '@angular/core';
import { BehaviorSubject, interval, Observable, Observer, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowingReader = true;

  toggleReader() {
    this.isShowingReader = !this.isShowingReader;
  }


  createIntervalObservable(): Observable<number> {
    return interval(1000);
  }

  createCustomObservable(): Observable<number> {
    return new Observable<number>(observer => {
      observer.next(42);

      setTimeout(() => observer.next(80), 1000);
      setTimeout(() => observer.next(100), 3000);
      setTimeout(() => observer.complete(), 6000);
    });
  }

  createSubject(): Observable<number> {
    let subject = new Subject<number>();

    subject.next(42);
    setTimeout(() => subject.next(80), 1000);
    setTimeout(() => subject.next(100), 3000);
    setTimeout(() => subject.complete(), 6000);

    return subject;
  }


  createBehaviorSubject(): Observable<number> {
    let b_subject = new BehaviorSubject<number>(42);

    setTimeout(() => b_subject.next(80), 1000);
    setTimeout(() => b_subject.next(100), 3000);
    setTimeout(() => b_subject.complete(), 6000);

    return b_subject;
  }



  createObserver(id: string): Observer<number> {
    return {
      next: val => console.log(`Observer ${id}, next: ${val}`), 
      complete: () => console.log(`Observer ${id} complete`), 
      error: err => console.log(`Observer ${id}, error: ${err}`)
    }
  }

  go() {
    let observer1 = this.createObserver('A');
    let observer2 = this.createObserver('B');

    let observable = this.createBehaviorSubject();

    observable.subscribe(observer1);

    setTimeout(() => {
      observable.subscribe(observer2);
    }, 2500);

  }
}

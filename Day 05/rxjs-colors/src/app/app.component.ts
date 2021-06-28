import { Component } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mashu$!: Observable<any>;

  constructor() {
    this.mashu$ = interval(1000).pipe(
      map(i => i ** 2), 
      filter(i => i % 3 === 0),
      tap(val => console.log(val))
    );
  }


  // factories: 
  // 1. interval
  // 2. of
  // 3. from
}

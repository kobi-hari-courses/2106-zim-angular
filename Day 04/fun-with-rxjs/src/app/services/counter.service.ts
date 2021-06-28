import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private value: number = 0;
  private value$ = new BehaviorSubject<number>(this.value);
  // private value$ = new Subject<number>();

  constructor() { }

  increment() {
    this.value++;
    this.value$.next(this.value);
  }

  dectrement() {
    this.value--;
    this.value$.next(this.value);
  }

  getCounter(): Observable<number> {
    return this.value$.asObservable();
  }
}

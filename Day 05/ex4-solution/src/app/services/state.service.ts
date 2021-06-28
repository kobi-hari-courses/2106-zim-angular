import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private a: number = 0;
  private b: number = 0;
  private a$ = new BehaviorSubject<number>(this.a);
  private b$ = new BehaviorSubject<number>(this.b);

  constructor() { }

  getA(): Observable<number> {
    return this.a$.asObservable();
  }

  setA(value: number) {
    this.a = value;
    this.a$.next(this.a);
  }

  getB(): Observable<number> {
    return this.b$.asObservable();
  }

  setB(value: number) {
    this.b = value;
    this.b$.next(this.b);
  }

  private isNumberValid(num: number): boolean {
    return (num > 0)
      && (num < 100)
      && (Number.isInteger(num));
  }

  isAValid(): Observable<boolean> {
    return this.a$.pipe(
      map(num => this.isNumberValid(num))
    )
  }

  isBValid(): Observable<boolean> {
    return this.b$.pipe(
      map(num => this.isNumberValid(num))
    )
  }

  areAllValid(): Observable<boolean> {
    let both$ = combineLatest([this.isAValid(), this.isBValid()]); // Observable<[boolean, boolean]>
    
    return both$.pipe(
      map(pair => pair[0] && pair[1])
    );
  }



}

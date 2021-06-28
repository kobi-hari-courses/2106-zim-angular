import { Observable, combineLatest, merge } from 'rxjs';
import { CalculationsService } from './../../services/calculations.service';
import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { map, mapTo, switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  a$!: Observable<number>;
  b$!: Observable<number>;
  sum$!: Observable<number>;
  diff$!: Observable<number>;
  product$!: Observable<number>;
  isValid$!: Observable<boolean>;
  isBusy$!: Observable<boolean>;

  constructor(
    private stateService: StateService, 
    private calcService: CalculationsService
    ) { }

  ngOnInit(): void {
    this.a$ = this.stateService.getA();
    this.b$ = this.stateService.getB();

    let both$ = combineLatest([this.a$, this.b$]);  // Observable<[number, number]>

    this.sum$ = both$.pipe(
      map(pair => this.calcService.add(pair[0], pair[1])), 
      switchAll()
    );

    this.diff$ = both$.pipe(
      map(pair => this.calcService.subtract(pair[0], pair[1])), 
      switchAll()
    );

    this.product$ = both$.pipe(
      map(pair => this.calcService.multiply(pair[0], pair[1])), 
      switchAll()
    );

    this.isValid$ = this.stateService.areAllValid();

    // when both$ fires an event it means that either a or b changed
    // when sum, diff, and product fire an event, it means that calculation is over
    // so when both fires an event: busy = true
    // when sum, diff, and product fire an event, busy = false

    let true$ = both$.pipe(mapTo(true));
    let false$ = merge(this.sum$, this.product$, this.diff$).pipe(mapTo(false));

    this.isBusy$ = merge(true$, false$);
  }

}


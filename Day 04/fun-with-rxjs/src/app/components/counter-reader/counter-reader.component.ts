import { Observable, Subscription } from 'rxjs';
import { CounterService } from './../../services/counter.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-reader',
  templateUrl: './counter-reader.component.html',
  styleUrls: ['./counter-reader.component.css']
})
export class CounterReaderComponent implements OnInit {
  value$!: Observable<number>;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.value$ = this.counterService.getCounter();
  }

  // value: number = 0;

  // sub!: Subscription;

  // ngOnInit(): void {
  //   this.sub = this
  //     .counterService
  //     .getCounter()
  //     .subscribe(val => {
  //       console.log('counter changed to value: ' + val);
  //       this.value = val;
  //     })
  // }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }


}

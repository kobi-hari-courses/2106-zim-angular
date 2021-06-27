import { Observable } from 'rxjs';
import { CounterService } from './../../services/counter.service';
import { Component, OnInit } from '@angular/core';

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

  // ngOnInit(): void {
  //   this
  //     .counterService
  //     .getCounter()
  //     .subscribe(val => {
  //       this.value = val;
  //     })
  // }

}

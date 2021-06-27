import { CounterService } from './../../services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-writer',
  templateUrl: './counter-writer.component.html',
  styleUrls: ['./counter-writer.component.css']
})
export class CounterWriterComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  inc() {
    this.counterService.increment();

  }

  dec() {
    this.counterService.dectrement();
  }

}

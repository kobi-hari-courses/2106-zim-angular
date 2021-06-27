import { AdditionService } from './../../services/addition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'], 
})
export class CalcComponent implements OnInit {
  res: number = 0;

  constructor(
    public additionService: AdditionService
    ) { }

  ngOnInit(): void {
  }

  add(value1: number, value2: number) {
    this.res = this.additionService.add(value1, value2);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Data
  a: number = 0;
  b: number = 0;
  sum: number = 0;
  product: number = 0;
  difference: number = 0;

  calc(a: number, b: number) {
    this.a = a;
    this.b = b;
    this.sum = a + b;
    this.difference = a - b;
    this.product = a * b;
  } 
}



import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {
  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

  async add(a: number, b: number): Promise<number> {
    await this.delay(1000);
    return a + b;
  }

  async subtract(a: number, b: number): Promise<number> {
    await this.delay(1000);
    return a - b;
  }
  async multiply(a: number, b: number): Promise<number> {
    await this.delay(1000);
    return a * b;
  }

}

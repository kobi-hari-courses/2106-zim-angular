import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomsService {
  private delay(millis: number): Promise<void> {
    return new Promise(success => setTimeout(success, millis));
  }

  private randomInt(max: number) : number {
    return Math.ceil(Math.random() * max);
  }

  constructor() { }

  async randomValue(max: number): Promise<number> {
    let res = this.randomInt(max);
    let delay = 2000 + this.randomInt(3000);

    await this.delay(delay);
    return res;
  }

  async randomString(): Promise<string> {
    let num = await this.randomValue(100000);
    return num.toString();
  }
}

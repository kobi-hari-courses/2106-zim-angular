import { RandomsService } from './services/randoms.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private random: RandomsService){}


  createPromise(): Promise<number> {
    return new Promise<number>((resolve, reject) => 
    {
      setTimeout(() => resolve(42), 3000);
    });
  }


  async go() {
    console.log('starting');
    let promises = [
      this.random.randomValue(10), 
      this.random.randomString()
    ] as const;

    let p_race = Promise.race(promises);

    let res = await p_race;

    console.log(res);
  }

  // old_go() {
  //   let p = this.createPromise();

  //   let q = p.then(res => {
  //     console.log('the result is ' + res);
  //     return 'Hello';
  //   });
  // }

  // async go() {
  //   console.log('A');
  //   await this.start();
  //   console.log('B'); 
  // }

  // async start() {
  //   console.log('1');
  //   let p = this.createPromise();
  //   console.log('2');

  //   let res = await p; // } function go() ends here

  //   console.log('3');

  //   return 'hello';
  // }
}

import { ALL_COLORS } from './../data/colors';
import { Injectable } from '@angular/core';
import { Color } from './../models/color.model';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor() { }

  private delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

  async search(keyword: string): Promise<Color[]> {
    await this.delay(3000);

    if ((!keyword) || (typeof(keyword) !== 'string')) return [];

    keyword = keyword.toLowerCase();

    let res = ALL_COLORS
          .filter(c => c.name.toLowerCase().includes(keyword));

    return res;
  }

}

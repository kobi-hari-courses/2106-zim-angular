import { ColorsService } from './services/colors.service';
import { Component, OnInit } from '@angular/core';
import { from, interval, merge, Observable, of, Subject } from 'rxjs';
import { filter, map, mapTo, mergeAll, switchAll, tap } from 'rxjs/operators';
import { Color } from './models/color.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  search$ = new Subject<string>();
  results$!: Observable<Color[]>;
  isBusy$!: Observable<boolean>;

  constructor(private colorsService: ColorsService) {
  }

  onInput(value: string) {
    this.search$.next(value);
  }

  ngOnInit(): void {
    this.results$ = this.search$.pipe(
      map(keyword => this.colorsService.search(keyword)),
      switchAll()
    );

    let true$ = this.search$.pipe(mapTo(true));
    let false$ = this.results$.pipe(mapTo(false));

    this.isBusy$ = merge(true$, false$);
  }

}

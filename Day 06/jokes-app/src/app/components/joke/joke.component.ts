import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, first, map, switchAll } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke$!: Observable<Joke>;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    let params$ = this.route.params;
    let type$ = this.route.params.pipe(
      map(prms => String(prms['type'])),
      distinctUntilChanged()
    );

    let index$ = this.route.params.pipe(
      map(prms => this.fixNumber(Number(prms['index']))),
      distinctUntilChanged()
    );

    this.joke$ = combineLatest([type$, index$]).pipe(
      map(([type, index]) => this.data.getJokeByTypeAndIndex(type, index)),
      switchAll()
    );
  }

  fixNumber(value: number): number {
    if (typeof (value) !== 'number') return 0;

    if (Number.isNaN(value)) return 0;

    return value;
  }

  next() {
    let type = String(this.route.snapshot.params['type']);
    let index = this.fixNumber(Number(this.route.snapshot.params['index']));
    this.router.navigate(['jokes', type, index + 1]);
  }

  prev() {
    let type = String(this.route.snapshot.params['type']);
    let index = this.fixNumber(Number(this.route.snapshot.params['index']));
    this.router.navigate(['jokes', type, index - 1]);
  }

  async edit() {
    console.log('edit');
    let currentJoke = await this.joke$
      .pipe(first())
      .toPromise();

      console.log('joke = ', currentJoke);
      this.router.navigate(['edit', currentJoke.id]);
  }

}

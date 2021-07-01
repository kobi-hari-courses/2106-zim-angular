import { DataService } from './services/data.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './models/movie.model';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movies$: Promise<Movie[]> | null = null;
  err: any = null;

  constructor(private data:DataService){}

  getAllMovies() {
    this.movies$ = this.data
      .getAllMovies()
      .catch(err => this.err = err);
  }

  getMovie(id: number) {
    this.movies$ = this.data
      .getMovieById(id)
      .then(movie => [movie])
      .catch(err => this.err = err);
  }
}

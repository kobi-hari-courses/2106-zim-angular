import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies$!: Promise<Movie[]>;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.movies$ = this.data.getAllMovies();
  }

}

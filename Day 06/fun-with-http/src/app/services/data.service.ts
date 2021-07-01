import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllMovies(): Promise<Movie[]> {
    const url = `${environment.baseUrl}/movies`;
    return this.http.get<Movie[]>(url).toPromise();
  }

  getMovieById(id: number): Promise<Movie> {
    const url = `${environment.baseUrl}/movies/${id}`;
    return this.http.get<Movie>(url).toPromise();
  }
}

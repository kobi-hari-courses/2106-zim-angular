import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getAllTypes(): Promise<string[]> {
    let url = `${environment.baseUrl}/types`;
    return this.http.get<string[]>(url).toPromise();
  }

  getJokeByTypeAndIndex(type: string, index: number): Promise<Joke> {
    let url = `${environment.baseUrl}/jokes?type=${type}&_limit=1&_start=${index}`;
    return this.http.get<Joke[]>(url)
      .toPromise()
      .then(jokes => jokes[0]);
  }

  updateJoke(joke: Joke): Promise<Joke> {
    let url = `${environment.baseUrl}/jokes/${joke.id}`;
    return this.http.put<Joke>(url, joke)
      .toPromise();
  }
}

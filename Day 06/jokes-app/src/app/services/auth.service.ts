import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  value: boolean = false;
  value$ = new BehaviorSubject<boolean>(this.value);

  constructor() { }

  login() {
    this.value = true;
    this.value$.next(this.value);
  }

  logout() {
    this.value = false;
    this.value$.next(this.value);
  }

  isLoggedIn(): Observable<boolean> {
    return this.value$.asObservable();
  }
}

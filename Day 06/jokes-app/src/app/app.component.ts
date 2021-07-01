import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  types: string[] = [];
  isLoggedIn$!: Observable<string>;

  constructor(
    private data: DataService,
    private auth: AuthService
    ){}

  async ngOnInit(): Promise<void> {
    this.types = await this.data.getAllTypes();
    this.isLoggedIn$ = this.auth.isLoggedIn().pipe(
      map(isLoggedIn => isLoggedIn ? 'Admin' : 'Guest')
    )
  }
}

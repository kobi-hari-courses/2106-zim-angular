import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JokeComponent } from './components/joke/joke.component';
import { EditJokeComponent } from './components/edit-joke/edit-joke.component';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    EditJokeComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

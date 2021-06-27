import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterWriterComponent } from './components/counter-writer/counter-writer.component';
import { CounterReaderComponent } from './components/counter-reader/counter-reader.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterWriterComponent,
    CounterReaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

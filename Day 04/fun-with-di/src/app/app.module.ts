import { HistoryService } from './services/history.service';
import { WrongAdditionService } from './services/wrong-addition.service';
import { AdditionService } from './services/addition.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcComponent } from './components/calc/calc.component';
import { GroupComponent } from './components/group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: AdditionService, 
      useClass: WrongAdditionService
    }, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

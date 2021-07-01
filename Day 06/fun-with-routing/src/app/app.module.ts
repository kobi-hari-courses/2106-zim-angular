import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageAComponent } from './components/page-a/page-a.component';
import { PageBComponent } from './components/page-b/page-b.component';
import { PageCComponent } from './components/page-c/page-c.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'a', pathMatch: 'full'},
  {path: 'a', component: PageAComponent}, 
  {path: 'b', component: PageBComponent}, 
  {path: 'c', component: PageCComponent}, 
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PageAComponent,
    PageBComponent,
    PageCComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

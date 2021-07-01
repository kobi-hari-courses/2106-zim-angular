import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddMovieComponent } from "./components/add-movie/add-movie.component";
import { MoviesListComponent } from "./components/movies-list/movies-list.component";


const routes: Routes = [
    { path: '', redirectTo: 'movies', pathMatch: 'full'},
    { path: 'movies', component: MoviesListComponent }, 
    { path: 'add', component: AddMovieComponent }
  ];
  
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], 
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
import { AuthGuard } from './guards/auth.guard';
import { AccountComponent } from './components/account/account.component';
import { EditJokeComponent } from './components/edit-joke/edit-joke.component';
import { JokeComponent } from './components/joke/joke.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'jokes/:type', component: JokeComponent },
  {path: 'jokes/:type/:index', component: JokeComponent}, 
  {path: 'edit/:id', component:EditJokeComponent, canActivate: [AuthGuard]}, 
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

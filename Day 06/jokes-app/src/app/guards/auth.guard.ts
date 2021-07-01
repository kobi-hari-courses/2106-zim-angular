import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private auth: AuthService){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

      let isLoggedIn = await this.auth.isLoggedIn().pipe(first()).toPromise();

      if (isLoggedIn) return true;

      let url = state.url;

      this.auth.isLoggedIn().pipe(
        filter(val => val), 
        first()
      ).subscribe(_ => {
        this.router.navigateByUrl(url);
      });

      return this.router.createUrlTree(['account']);
  }
  
}

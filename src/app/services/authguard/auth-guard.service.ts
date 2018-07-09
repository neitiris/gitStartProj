import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(): boolean {
    if (!localStorage.getItem('currentUser')) {
      return false && this.router.navigate([ '', 'home' ]);
    }
    return true;
  }
}

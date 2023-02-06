import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service"

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor( private authService: AuthService, private router: Router ) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean{
    if (localStorage.getItem('currentUser')) {
      return true;
      }else {
        this.router.navigate(['signin']);
        return false;
      }

 
  }

  canActivateChild( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    return this.canActivate(next, state)
  }
}
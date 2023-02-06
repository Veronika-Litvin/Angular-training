import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoadGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  canLoad(): Observable<boolean> | boolean {
      if (localStorage.getItem('currentUser')) {
        return true;
      } 

      this.router.navigate(['/login']);
      return false;
  }
}
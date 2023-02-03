import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { existingUsers } from '../../authorization/mocks/existing-users';
import { RegisterUser } from '../../authorization/models/new-user.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  currentUser: BehaviorSubject<string> = new BehaviorSubject<string>('');
  isLogged = false;

  constructor(private router: Router) { }

  registerUser(user: RegisterUser): Observable<boolean> {
    existingUsers.push(user);
    this.isLogged = true;
    localStorage.setItem('currentUser', user.name);

    return of(true).pipe(delay(500));
  }

  loginUser(user: RegisterUser): Observable<boolean> {
    const isUserExist = existingUsers.findIndex(userExist => {
      return userExist.name === user.name && userExist.password === user.password;
    });

    if (isUserExist !== -1) {
      this.currentUser.next(user.name);
      this.isLogged = true;
      return of(true).pipe(delay(500));
    }

      return of(false).pipe(delay(500));
  }

  logOut(): void {
    this.currentUser.next('');
    localStorage.removeItem('currentUser');
    this.isLogged = false;
    this.router.navigate(['signin']);
  }
}

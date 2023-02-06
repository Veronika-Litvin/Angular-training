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

  constructor(private router: Router) { }

  registerUser(user: RegisterUser): Observable<boolean> {
    existingUsers.push(user);
    localStorage.setItem('currentUser', user.name);
    this.currentUser.next(user.name);
    return of(true).pipe(delay(500));
  }

  loginUser(user: RegisterUser): Observable<boolean> {
    const isUserExist = existingUsers.findIndex(userExist => {
      return userExist.name === user.name && userExist.password === user.password;
    });

    let status = false;

    if (isUserExist !== -1) {
      this.currentUser.next(user.name);
      localStorage.setItem('currentUser', user.name);
      status = true;
    }
      return of(status).pipe(delay(500));
  }

  logOut(): void {
    this.currentUser.next('');
    localStorage.removeItem('currentUser');
    this.router.navigate(['signin']);
  }
}

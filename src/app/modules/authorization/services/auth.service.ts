import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { existingUsers } from '../mocks/existing-users';
import { RegisterUser } from '../models/new-user.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLogged = false;

  constructor(private router: Router) {}

  registerUser(user: RegisterUser) {
    existingUsers[user.name] = {name: user.name, password: user.password};
    this.isLogged = true;
    localStorage.setItem('currentUser', user.name);
  }

  loginUser(user: RegisterUser) {
    if(existingUsers[user.name] && existingUsers[user.name].password === user.password) {
        this.isLogged = true;
        return true;
    }else {
        this.isLogged = false;
        return false;
    }
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.isLogged = false;
    this.router.navigate(['signin']);
  }

}

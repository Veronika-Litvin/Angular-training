import { Injectable } from '@angular/core';
import { existingUsers } from '../mocks/existing-users';
import { RegisterUser } from '../models/new-user.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLogged = false;

  registerUser(user: RegisterUser) {
    existingUsers[user.name] = {name: user.name, password: user.password};
    this.isLogged = true;
  }

  loginUser(user: RegisterUser) {
    if(existingUsers[user.name] && existingUsers[user.name].password === user.password) {
        this.isLogged = true
        return true;
    }else {
        this.isLogged = false
        return false;
    }

  }

}

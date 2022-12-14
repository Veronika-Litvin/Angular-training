import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(): IUser[] {
    return [
      {name: 'Masha', age: 15, isActivated: true},
      {name: 'Vasya', age: 25, isActivated: false},
      {name: 'Anna', age: 13, isActivated: true},
      {name: 'Vlad', age: 36, isActivated: true},
      {name: 'Nikita', age: 42, isActivated: false},
      {name: 'Vika', age: 19, isActivated: false},
      {name: 'Petr', age: 29, isActivated: true},
  ]
  }
}

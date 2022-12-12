import { Injectable } from '@angular/core';
import { users } from '../mocks/users';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersList!: Array<IUser>;

  constructor() {
    this.usersList = users;
  }
}

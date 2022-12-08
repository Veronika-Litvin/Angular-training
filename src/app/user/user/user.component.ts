import { Component } from '@angular/core';
import { IUser } from '../models/user.interface';
import { users } from '../models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  usersList!: Array<IUser>;
  showNonActive = true;

  constructor() { 
    this.usersList = users;
  }

  deactivateUser(user: IUser): void {
    user.isActivated = false;
  }

}

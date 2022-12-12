import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.interface';
import { users } from '../../mocks/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  usersList!: Array<IUser>;
  showNonActive = true;

  constructor(private router: Router) {
    this.usersList = users;
  }

  deactivateUser(user: IUser): void {
    user.isActivated = false;
  }
  navigateCarPage(): void {
    this.router.navigate(['car']);
  }
}

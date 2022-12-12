import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
  users!: IUser[];
  showNonActive = true;

  constructor(private userService: UserService, private router: Router) {
    this.users = this.userService.usersList;
  }

  navigateCarPage(): void {
    this.router.navigate(['car']);
  }
}

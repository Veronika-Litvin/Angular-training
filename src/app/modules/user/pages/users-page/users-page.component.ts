import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { UserListItemComponent } from '../../components/user-list-item/user-list-item.component';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users: IUser[] = [];
  showNonActive = true;

  @ViewChildren(UserListItemComponent) children!: QueryList<UserListItemComponent>;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  navigateCarPage(): void {
    this.router.navigate(['car']);
  }

  deactivateAllUsers(): void {
    this.children.forEach((el) => {
      el.deactivateUser(el.user)
    });
  }
}

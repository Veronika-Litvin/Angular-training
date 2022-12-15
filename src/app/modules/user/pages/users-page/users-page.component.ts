import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users: IUser[] = [];

  constructor(private userService: UserService, private router: Router) {
  }
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
  navigateCarPage(): void {
    this.router.navigate(['car']);
  }
}

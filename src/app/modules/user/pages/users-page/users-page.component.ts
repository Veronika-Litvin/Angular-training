import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritsDataService } from 'src/app/services/favorits-data.service';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users: Map<IUser, boolean> = new Map();
  favoriteUsers: Map<IUser, boolean> = new Map();

  constructor(private userService: UserService, private router: Router, private favoritsDataService: FavoritsDataService) {
  }
  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.favoritsDataService.setAllUsers(this.users);
    this.favoriteUsers = this.favoritsDataService.getFavoriteUsers();
  }
  navigateCarPage(): void {
    this.router.navigate(['car']);
  }
}

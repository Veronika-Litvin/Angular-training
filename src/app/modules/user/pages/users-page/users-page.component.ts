import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteDataService } from 'src/app/services/favorite-data.service';
import { FavoriteDecorator } from '../../models/favorite-decorator.interface';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users: FavoriteDecorator<IUser>[] = [];
  favoriteUsers: FavoriteDecorator<IUser>[] = [];

  constructor(private userService: UserService, private router: Router, private favoriteDataService: FavoriteDataService<IUser>) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.favoriteUsers = this.favoriteDataService.getFavoriteUsers();
  }
  navigateCarPage(): void {
    this.router.navigate(['car']);
  }
}

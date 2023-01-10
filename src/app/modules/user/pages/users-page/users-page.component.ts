import { Component, OnInit } from '@angular/core';
import { FavoriteTypes } from 'src/app/modules/shared/models/favorite.enum';
import { FavoriteDataService } from 'src/app/modules/shared/services/favorite-data.service';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  users: IUser[] = [];
  favoriteUsers: IUser[] = [];
  favoriteIds: number[] = [];

  constructor(private userService: UserService, private favoriteDataService: FavoriteDataService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.favoriteIds = this.favoriteDataService.getFavorites(FavoriteTypes.User)
    this.favoriteUsers = this.userService.getFavoriteUsers();
  }

  updateFavoriteUser(user: IUser):void {
    this.favoriteIds = this.favoriteDataService.updateFavoriteItems(FavoriteTypes.User, user.id);
    this.favoriteUsers = this.userService.getFavoriteUsers();
  }
}

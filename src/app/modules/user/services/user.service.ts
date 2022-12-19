import { Injectable } from '@angular/core';
import { FavoriteTypes } from '../../shared/models/favorite-enum';
import { FavoriteDataService } from '../../shared/services/favorite-data.service';
import { users } from '../mocks/user-list';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users!: IUser[];

  constructor( private favoriteService: FavoriteDataService) {
    this.users = users;
  }

  getUsers(): IUser[] {
    return this.users;
  }
  getFavoriteUsers(): IUser[] {
    const favoriteIds = this.favoriteService.getFavorites(FavoriteTypes.User);
    return this.getUsers().filter((user) => {
      return favoriteIds.includes(user.id);
    });
  }
}

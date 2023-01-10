import { Injectable } from '@angular/core';
import { Address } from '../../shared/models/addresses.interface';
import { FavoriteTypes } from '../../shared/models/favorite.enum';
import { FavoriteDataService } from '../../shared/services/favorite-data.service';
import { users } from '../mocks/user-list';
import { IFormUser } from '../models/form-user-data.interface';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private favoriteService: FavoriteDataService) { }

  getUsers(): IUser[] {
    return users;
  }

  getFavoriteUsers(): IUser[] {
    const favoriteIds = this.favoriteService.getFavorites(FavoriteTypes.User);
    return this.getUsers().filter((user) => {
      return favoriteIds.includes(user.id);
    });
  }

  createUser(newFormUser: IFormUser, addresses: Address[]): void {
    users.push({
      id: users.length + 1,
      ...newFormUser,
      addresses
    });
  }
}

import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FavoriteTypes } from '../../shared/models/favorite.enum';
import { FavoriteDataService } from '../../shared/services/favorite-data.service';
import { IUser } from '../models/user.interface';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private favoriteService: FavoriteDataService, private userApiService: UserApiService) { }

  getFavoriteUsers(): Observable<IUser[]> {
    const favoriteIds = this.favoriteService.getFavorites(FavoriteTypes.User);

    return this.userApiService.getUsers()
      .pipe(
        map((users) => {
          return users.filter(user => favoriteIds.includes(+user.id));
        })
      )
  }

}

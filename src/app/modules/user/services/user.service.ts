import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, Observable } from 'rxjs';
import { FavoriteTypes } from '../../shared/models/favorite.enum';
import { FavoriteDataService } from '../../shared/services/favorite-data.service';
import { IUser } from '../models/user.interface';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private favoriteService: FavoriteDataService,
    private userApiService: UserApiService) { }

  getFavoriteUsers(): Observable<IUser[]> {
    const favoriteIds = this.favoriteService.getFavorites(FavoriteTypes.User);

    return this.userApiService.getUsers({ page: 1, results: 10, tag: 'favorites' })
      .pipe(
        map((users) => {
          return users.filter(user => favoriteIds.includes(+user.id));
        })
      )
  }

  getCurrentUser(route: ActivatedRoute): Observable<IUser | undefined> {
    return route.params
      .pipe(
        mergeMap((params) => {
          const id = params['id'];
          console.log('id', id)
          return this.userApiService.getUserById(id)
        })
      );
  }

}

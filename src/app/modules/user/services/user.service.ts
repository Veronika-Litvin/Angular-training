import { Injectable } from '@angular/core';
import { catchError, find, map, mergeMap, Observable, of, take } from 'rxjs';
import { ServerAnswer } from '../../core/models/http-answer.interface';
import { ApiService } from '../../core/services/api.service';
import { Address } from '../../shared/models/addresses.interface';
import { FavoriteTypes } from '../../shared/models/favorite.enum';
import { FavoriteDataService } from '../../shared/services/favorite-data.service';
import { IFormUser } from '../models/form-user-data.interface';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private favoriteService: FavoriteDataService, private apiService: ApiService) { }

  getUsers(): Observable<IUser[]> {
    return this.apiService.get<ServerAnswer>()
    .pipe(
      map((responce: ServerAnswer) => {
        return responce.results.map((serverUser) => {
          return {
            id: +serverUser.id.value,
            firstName: serverUser.name.first,
            lastName: serverUser.name.last,
            userEmail: serverUser.email,
            age: serverUser.dob.age,
            phone: serverUser.phone,
            gender: serverUser.gender === 'female' ? true : false,
            imageUrl: serverUser.picture.large,
            addresses: [
              {
              addressLine: serverUser.location.country,
              city: serverUser.location.city,
              zip: serverUser.location.postcode
            }
          ]
          } as IUser;
        })
      })
    );
  }

  getUserById(id: number): Observable<IUser | undefined> {
    return this.getUsers()
      .pipe(
        mergeMap(users => users),
        find(user => user.id === id)
      )
  }

  getFavoriteUsers(): Observable<IUser[]> {
    const favoriteIds = this.favoriteService.getFavorites(FavoriteTypes.User);

    return this.getUsers()
      .pipe(
        map((users) => {
          return users.filter(user => favoriteIds.includes(user.id));
        })
      )
  }

  getFilteringUsers(param: string): Observable<IUser[]> {
    return this.getUsers()
      .pipe(
        map(users => users.filter(user => {
          const fullName = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`;

          if (fullName.includes(param.toLowerCase())) {
            return user;
          }
          return;
        })),
      )
  }

  createUser(newFormUser: IFormUser, addresses: Address[]): Observable<boolean> {
    return this.getUsers().pipe(
      take(1),
      map((users) => {
        users.push({
          id: users.length + 1,
          ...newFormUser,
          addresses
        });
        return true;
      }),
      catchError((err) => {
        console.log(err);
        return of(false)
      })
    );
  }

  updateUser(userId: number, newFormUser: IFormUser, addresses: Address[]): Observable<boolean> {
    return this.getUsers().pipe(
      take(1),
      map((users) => {
        const currentUser = users.findIndex((user) => user.id === userId);
        users.splice(currentUser, 1, {
          id: userId,
          ...newFormUser,
          addresses
        });
        return true;

      }),
      catchError((err) => {
        console.log(err);
        return of(false)
      })
    );
  }
}

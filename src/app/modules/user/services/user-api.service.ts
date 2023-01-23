import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, take } from 'rxjs';
import { ServerResponse } from '../../core/models/http-response.interface';
import { ApiService } from '../../core/services/api.service';
import { Address } from '../../shared/models/addresses.interface';
import { FavoriteDataService } from '../../shared/services/favorite-data.service';
import { IFormUser } from '../models/form-user-data.interface';
import { IUser } from '../models/user.interface';
import { convertToUserList } from '../utils/user-conversion';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private favoriteService: FavoriteDataService, private apiService: ApiService) { }

  getUsers(page = 1, results = 10): Observable<IUser[]> {
    let params = new HttpParams();
    params = params.set('seed', 'abc');
    params = params.set('results', results);
    params = params.set('page', page);

    const options = {
      params: params
    }


    return this.apiService.get<ServerResponse>('', options)
      .pipe(
        map((response) => {
          return convertToUserList(response.body);
        })
      );
  }

  getUsersByTag(tag: string, page = 1, results = 10): Observable<IUser[]> {
    let params = new HttpParams();
    params = params.set('seed', 'abc');
    params = params.set('results', results);
    params = params.set('page', page);

    if (tag.length > 0) {
      params = params.set('search', tag);
    }

    const options = {
      params: params
    }
    return this.apiService.get<ServerResponse>('', options).pipe(
      map((response) => convertToUserList(response.body))
    )
  }


  createUser(newFormUser: IFormUser, addresses: Address[]): Observable<boolean> {
    const newUser = {
      id: Math.random().toString(),
      ...newFormUser,
      addresses
    }

    return this.apiService.post<IUser>(newUser).pipe(
      map((response) => response.status)
    )
  }

  updateUser(userId: string, newFormUser: IFormUser, addresses: Address[]): Observable<boolean> {
    const newUser = {
      id: userId,
      ...newFormUser,
      addresses
    }

    return this.apiService.update<IUser>(userId, newUser).pipe(
      map((response) => response.status)
    )
  }

  getUserById(id: number): Observable<IUser | undefined> {
    return this.getUsers().pipe(
      take(1),
      delay(700),
      map((users) => {
        return users.find((user) => +user.id === id)!;
      })
    );
  }

}

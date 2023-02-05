import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { delay, map, Observable } from 'rxjs';
import { ServerResponse } from '../../core/models/http-response.interface';
import { ApiService } from '../../core/services/api.service';
import { Address } from '../../shared/models/addresses.interface';
import { IFormUser } from '../models/form-user-data.interface';
import { IUser } from '../models/user.interface';
import { randomDelay } from '../utils/random-time';
import { convertToUserList } from '../utils/user-conversion';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private apiService: ApiService) { }

  getUsers({ page = 1, results = 10, tag, id }: Params): Observable<IUser[]> {
    let params = new HttpParams();
    params = params.set('seed', 'abc');
    params = params.set('results', results);
    params = params.set('page', page);

    if (tag && tag.length > 0) {
      params = params.set('search', tag);
    }

    if (id && id.length > 0) {
      params = params.set('id', id);
    }

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

    return this.apiService.update<IUser>(newUser).pipe(
      map((response) => response.status)
    )
  }

  getUserId(id: string): Observable<string> {
    return this.apiService.get<ServerResponse>('', { params: { id: id } }).pipe(
      map(() => {
        return id
      }),
      delay(randomDelay(id, 10000, 20000))
    )
  }

  
  getUserById(id: string): Observable<IUser | undefined> {
        return this.apiService.get<ServerResponse>('', { params: { results: 10, seed: 'abc', id: id } })
        .pipe(
          map((response) => {
            return convertToUserList(response.body)
                  .find((user: IUser) => user.id === id);
          })
        );
  }
  

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, find, map, mergeMap, Observable } from 'rxjs';
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

  users!: BehaviorSubject<IUser[]>;

  constructor(private favoriteService: FavoriteDataService) { }

  getUsers(): Observable<IUser[]> {
    this.users = new BehaviorSubject(users);
    return this.users.asObservable();
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

  createUser(newFormUser: IFormUser, addresses: Address[]): void {
    users.push({
      id: users.length + 1,
      ...newFormUser,
      addresses
    });
  }

  updateUser(userId: number, newFormUser: IUser, addresses: Address[]): void {
    this.getUsers()
      .pipe(
        map(users => {
          const editableUser = users.find(user => user.id === userId);
          editableUser!.id = userId;
          editableUser!.firstName = newFormUser.firstName;
          editableUser!.lastName = newFormUser.lastName;
          editableUser!.age = newFormUser.age;
          editableUser!.company = newFormUser.company;
          editableUser!.department = newFormUser.department;
          editableUser!.userEmail = newFormUser.userEmail;
          editableUser!.addresses = addresses;
          return users;
        })
      ).subscribe(users => this.users.next(users))
  }
}

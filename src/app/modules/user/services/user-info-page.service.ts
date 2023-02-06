import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/user.interface';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserInfoPageService {

  currentUser: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);

  constructor(private userApiService: UserApiService) { }

  updateCurrentUser(user: IUser): void {
    this.currentUser.next(user);
}

  getSavedCurrentUser(): Observable<IUser | null> {
    return this.currentUser.asObservable();
  }

}

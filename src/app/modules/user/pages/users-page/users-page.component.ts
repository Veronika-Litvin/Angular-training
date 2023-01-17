import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoriteTypes } from 'src/app/modules/shared/models/favorite.enum';
import { FavoriteDataService } from 'src/app/modules/shared/services/favorite-data.service';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit, OnDestroy {
  users!: IUser[];
  favoriteUsers!: IUser[];
  favoriteIds: number[] = [];

  subscription: Subscription = new Subscription;

  constructor(private userService: UserService, private favoriteDataService: FavoriteDataService) {}


  ngOnInit(): void {
    this.subscription.add(this.userService.getUsers().subscribe(users => this.users = users));
    this.favoriteIds = this.favoriteDataService.getFavorites(FavoriteTypes.User);
    this.subscription.add(this.userService.getFavoriteUsers().subscribe(favorits => this.favoriteUsers = favorits));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateFavoriteUser(user: IUser): void {
    this.favoriteIds = this.favoriteDataService.updateFavoriteItems(FavoriteTypes.User, user.id);
    this.subscription.add(this.userService.getFavoriteUsers().subscribe(favorits => this.favoriteUsers = favorits));
  }

  searchUsers(param: string): void {
    this.subscription.add(this.userService.getFilteringUsers(param)
      .subscribe(users => this.users = users));
  }
}

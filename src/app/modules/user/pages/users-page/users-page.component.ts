import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { FavoriteTypes } from 'src/app/modules/shared/models/favorite.enum';
import { FavoriteDataService } from 'src/app/modules/shared/services/favorite-data.service';
import { IUser } from '../../models/user.interface';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  users!: IUser[];

  favoriteUsers!: IUser[];

  favoriteIds: number[] = [];

  page = 1;

  pageSize = 10;

  subscription: Subscription = new Subscription;

  length = 1000;

  searchValue = '';

  searchedUsers: IUser[] = [];

  constructor(private userApiService: UserApiService, private favoriteDataService: FavoriteDataService) { }


  ngOnInit(): void {
    this.getUsers();
    // this.favoriteIds = this.favoriteDataService.getFavorites(FavoriteTypes.User);
    // this.subscription.add(this.userService.getFavoriteUsers().subscribe(favorits => this.favoriteUsers = favorits));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateFavoriteUser(user: IUser): void {
    this.favoriteIds = this.favoriteDataService.updateFavoriteItems(FavoriteTypes.User, +user.id);
    // this.subscription.add(this.userService.getFavoriteUsers().subscribe(favorits => this.favoriteUsers = favorits));
  }

  searchUsers(param: string): void {

    if ((this.searchValue.length > 0 && param.length === 0) || (this.searchValue.length === 0 && param.length > 0)) {
      this.paginator.pageIndex = 0;
    }

    if (param.length === 0) {
      this.subscription.add(this.userApiService.getUsers()
        .subscribe(users => {
          this.users = users;
          this.searchValue = param;
        }));
    } else {
      this.subscription.add(this.userApiService.getUsersByTag(param)
        .subscribe(users => {
          this.searchedUsers = users;
          this.searchValue = param;
        }));
    }

  }

  paginate(e: PageEvent): void {
    this.page = e.pageIndex + 1;
    this.pageSize = e.pageSize;
    if (this.searchValue.length > 0) {
      this.getUsersByTag(this.searchValue, this.page, this.pageSize);
    } else {
      this.getUsers(this.page, this.pageSize);
    }
  }

  getUsers(page?: number, pageSize?: number): void {
    this.subscription.add(this.userApiService.getUsers(page, pageSize)
      .subscribe(users => {
        this.users = users;
      }));
  }

  getUsersByTag(search: string, page?: number, pageSize?: number): void {
    this.subscription.add(this.userApiService.getUsersByTag(search, page, pageSize)
      .subscribe(users => {
        this.searchedUsers = users;
      }))
  }
}

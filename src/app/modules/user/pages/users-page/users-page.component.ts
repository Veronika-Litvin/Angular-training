import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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

  page = 1;

  pageSize= 10;

  subscription: Subscription = new Subscription;

  activePageDataChunk: IUser[] = [];

  searchedUsers: IUser[] = [];

  length = 200;

  isSearch = false;

  constructor(private userService: UserService, private favoriteDataService: FavoriteDataService) {}


  ngOnInit(): void {
    this.subscription.add(this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.length = users.length;
      this.activePageDataChunk = this.users.slice(0,this.pageSize)}));
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
    this.subscription.add(this.userService.getFilteringUsers(param, this.users)
      .subscribe(users => {
        if(param.length === 0) {
          this.isSearch = false;
        }else {
          this.searchedUsers = users;
          this.isSearch = true;
        }

      }));
  }

  public handlePage(e: PageEvent) {
    this.page = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  private iterator() {
    const end = (this.page + 1) * this.pageSize;
    const start = (this.page) * this.pageSize;
    this.activePageDataChunk = this.users.slice(start, end);
  }
}

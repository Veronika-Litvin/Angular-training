import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FavoriteDataService } from 'src/app/modules/shared/services/favorite-data.service';
import { enviroment } from 'src/enviroments/enviroment';
import { pageSizeOptions } from '../../consts/paginatorValues';
import { IUser } from '../../models/user.interface';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  users!: IUser[];

  favoriteUsers!: IUser[];

  favoriteIds: number[] = [];

  page = 1;

  pageSize = pageSizeOptions[1];

  length: number;

  searchValue = '';

  pageSizeOptions: number[];

  constructor(private userApiService: UserApiService, private favoriteDataService: FavoriteDataService) {
    this.length = enviroment.usersTotalCount;
    this.pageSizeOptions = pageSizeOptions
   }


  ngOnInit(): void {
    this.getUsers(this.page, this.pageSize);
    // this.favoriteIds = this.favoriteDataService.getFavorites(FavoriteTypes.User);
    // this.subscription.add(this.userService.getFavoriteUsers().subscribe(favorits => this.favoriteUsers = favorits));
  }

  // updateFavoriteUser(user: IUser): void {
  //   this.favoriteIds = this.favoriteDataService.updateFavoriteItems(FavoriteTypes.User, +user.id);
  //   this.subscription.add(this.userService.getFavoriteUsers().subscribe(favorits => this.favoriteUsers = favorits));
  // }

  searchUsers(param: string): void {
    if ((this.searchValue.length > 0 && param.length === 0) || (this.searchValue.length === 0 && param.length > 0)) {
      this.paginator.pageIndex = 0;
      this.paginator.pageSize = pageSizeOptions[1];
    }

    this.searchValue = param;
      this.getUsers(1, 10, param);
  }

  paginate(e: PageEvent): void {
    this.page = e.pageIndex + 1;
    this.pageSize = e.pageSize;
      this.getUsers(this.page, this.pageSize, this.searchValue);
  }

  getUsers(page: number, results: number, tag?: string): void {
      this.userApiService.getUsers({page, results, tag})
      .subscribe(users => {
        this.users = users;
      });
  }
}

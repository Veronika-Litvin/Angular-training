import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { concatMap, exhaustMap, mergeMap, Subject, switchMap, takeUntil } from 'rxjs';
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
export class UsersPageComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  users!: IUser[];

  favoriteUsers!: IUser[];

  favoriteIds: number[] = [];

  page = 1;

  pageSize = pageSizeOptions[1];

  length: number;

  searchValue = '';

  pageSizeOptions: number[];

  responsedUsers = new Subject<void>();
  responsedUsers$ = this.responsedUsers.asObservable();

  exelUser: Subject<IUser> = new Subject();
  exelUser$ = this.exelUser.asObservable();

  orderUser: Subject<IUser> = new Subject();
  orderUser$ = this.orderUser.asObservable();

  multiResponsedUsers = new Subject<void>();
  multiResponsedUsers$ = this.multiResponsedUsers.asObservable();

  destroySubsciption = new Subject<boolean>();

  constructor(private userApiService: UserApiService, private favoriteDataService: FavoriteDataService) {
    this.length = enviroment.usersTotalCount;
    this.pageSizeOptions = pageSizeOptions
  }


  ngOnInit(): void {
    this.getUsers(this.page, this.pageSize);

    this.responsedUsers$
    .pipe(
      switchMap(() => {
        return this.userApiService.getUsers({ page: this.page, results: this.pageSize, tag: this.searchValue });
      }),
      takeUntil(this.destroySubsciption)
    )
    .subscribe(users => this.users = users);


    this.exelUser$
    .pipe(
      mergeMap(user => this.userApiService.getUserById(user.id)),
      takeUntil(this.destroySubsciption)
    )
    .subscribe(user => console.log("Excel report downloaded:", user));

    this.orderUser$.
    pipe(
      concatMap(user => this.userApiService.getUserById(user.id)),
      takeUntil(this.destroySubsciption)
    )
    .subscribe(user => console.log("Excel report downloaded:", user));

    this.multiResponsedUsers$
    .pipe(
      exhaustMap(() => {
        return this.userApiService.getUsers({ page: this.page, results: this.pageSize, tag: this.searchValue });
      }),
      takeUntil(this.destroySubsciption)
    )
    .subscribe(users => this.users = users);


    // this.favoriteIds = this.favoriteDataService.getFavorites(FavoriteTypes.User);
    // this.subscription.add(this.userService.getFavoriteUsers().subscribe(favorits => this.favoriteUsers = favorits));
  }

  // updateFavoriteUser(user: IUser): void {
  //   this.favoriteIds = this.favoriteDataService.updateFavoriteItems(FavoriteTypes.User, +user.id);
  //   this.subscription.add(this.userService.getFavoriteUsers().subscribe(favorits => this.favoriteUsers = favorits));
  // }

  ngOnDestroy(): void {
    this.destroySubsciption.next(true);
  }

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
    this.userApiService.getUsers({ page, results, tag })
      .subscribe(users => {
        this.users = users;
      });
  }

  refresh(): void {
    this.responsedUsers.next();
  }

  multiRefresh(): void {
    this.multiResponsedUsers.next();
  }

  downloadUser(user: IUser): void {
    console.log('Request from ', user.id)
    this.exelUser.next(user)
  }

  downloadInOrderUser(user: IUser): void {
    console.log('Request from ', user.id)
    this.orderUser.next(user);
  }

}



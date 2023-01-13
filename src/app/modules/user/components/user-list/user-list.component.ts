import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { combineLatest, debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users!: Observable<IUser[]>;
  @Input() favoriteIds: number[] = [];
  @Input() search!: Observable<string>;
  @Output() updateFavoriteEvent = new EventEmitter<IUser>();


  ngOnInit(): void {
    if (this.search) {
      this.users = combineLatest([this.users, this.search]).pipe(
        debounceTime(500),
        distinctUntilChanged(),
        map(([users, filterString]) =>
          users.filter(user =>
            user.firstName.toLowerCase().includes(filterString.toLowerCase()) || user.lastName.toLowerCase().includes(filterString.toLowerCase())
          )
        )
      );
    }
  }

  changeFavorite(user: IUser): void {
    this.updateFavoriteEvent.emit(user);
  }

  isFavorite(user: IUser): boolean {
    return this.favoriteIds.includes(user.id);
  }
}


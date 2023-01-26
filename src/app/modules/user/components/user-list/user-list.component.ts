import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users!: IUser[];
  @Input() favoriteIds: number[] = [];
  @Output() updateFavoriteEvent = new EventEmitter<IUser>();
  @Output() saveUserEvent = new EventEmitter<IUser>();
  @Output() saveInOrderUserEvent = new EventEmitter<IUser>();


  changeFavorite(user: IUser): void {
    this.updateFavoriteEvent.emit(user);
  }

  saveUser(user: IUser): void {
    this.saveUserEvent.emit(user);
  }

  saveInOrder(user: IUser): void {
    this.saveInOrderUserEvent.emit(user);
  }

  isFavorite(user: IUser): boolean {
    return this.favoriteIds.includes(+user.id);
  }
}


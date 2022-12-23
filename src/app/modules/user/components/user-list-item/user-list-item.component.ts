import { Component, EventEmitter, Input, Output } from '@angular/core';
import { defaultImg } from '../../mocks/user-list';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})

export class UserListItemComponent {
  @Input() user!: IUser;
  @Input() isFavorite!: boolean;
  @Output() favoriteChangedEvent = new EventEmitter();
  defaultImg!: string;

  constructor() {
    this.defaultImg = defaultImg;
  }

  toggleFavorits(): void {
    this.favoriteChangedEvent.emit();
  }
}
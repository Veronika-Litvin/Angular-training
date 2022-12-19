import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent {
  @Input() user!: IUser;
  @Input() isFavorite!: boolean;
  @Output() favoriteChangedEvent = new EventEmitter();


  toggleFavorits(): void {
    this.favoriteChangedEvent.emit();
  }
}
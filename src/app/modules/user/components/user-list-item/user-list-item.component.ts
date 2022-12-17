import { Component, Input } from '@angular/core';
import { FavoriteDataService } from 'src/app/services/favorite-data.service';
import { FavoriteDecorator } from '../../models/favorite-decorator.interface';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent {
  @Input() user!: FavoriteDecorator<IUser>;
  @Input() isFavorite!: boolean

  constructor(private favoriteDataService: FavoriteDataService<IUser>) {
  }

  toggleFavorits() {
    this.isFavorite = this.favoriteDataService.toggleFavoriteUsers(this.user);
  }
}
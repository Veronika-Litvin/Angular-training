import { Component, Input } from '@angular/core';
import { FavoritsDataService } from 'src/app/services/favorits-data.service';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent {
  @Input() user!: IUser;
  @Input() isFavorite!: boolean

  constructor(private favoritsDataService: FavoritsDataService) {
  }

  toggleFavorits() {
    this.isFavorite = this.favoritsDataService.toggleFavoriteUser(this.user);
  }
}
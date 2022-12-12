import { Component, Input } from '@angular/core';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent {
  @Input() user!: IUser;
  showNonActive = true;

  deactivateUser(user: IUser): void {
    user.isActivated = false;
  }

}

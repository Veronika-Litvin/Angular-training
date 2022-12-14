import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent {
  @Input() user!: IUser;
  @Input() showNonActive = true;

  constructor(private ref: ChangeDetectorRef) { }

  deactivateUser(user: IUser): void {
    if (user.age > 18) {
      user.isActivated = false;
    }
    this.ref.detectChanges();
  }
  disableBtn(): boolean {
    if (this.user.age < 18 || !this.user.isActivated) {
      return true;
    } else {
      return false;
    }
  }
}
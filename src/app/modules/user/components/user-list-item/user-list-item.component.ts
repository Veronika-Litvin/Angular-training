import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {
    this.defaultImg = defaultImg;
  }

  toggleFavorits(): void {
    this.favoriteChangedEvent.emit();
  }

  navigateEditPage(id: string): void {
    console.log('----', id)
    this.router.navigate(['/edit-user', id])
  }
}
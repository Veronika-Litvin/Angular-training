import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserListItemComponent,
    UsersPageComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    SharedModule
  ]
})
export class UserModule { }

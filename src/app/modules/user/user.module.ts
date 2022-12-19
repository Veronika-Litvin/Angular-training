import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserCreationPageComponent } from './pages/user-creation-page/user-creation-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    UserListItemComponent,
    UsersPageComponent,
    UserListComponent,
    UserCreationPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    SharedModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UserModule { }

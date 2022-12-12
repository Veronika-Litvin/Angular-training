import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class UserModule { }

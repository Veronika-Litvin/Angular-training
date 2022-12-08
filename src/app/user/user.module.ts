import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

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
  ]
})
export class UserModule { }

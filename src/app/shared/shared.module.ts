import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { FormsModule } from '@angular/forms';

const uiModules = [
  MatTabsModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  FormsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    uiModules
  ],
  exports : [
    uiModules
  ]
})
export class SharedModule { }

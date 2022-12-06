import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';

const uiModules = [
  MatTabsModule,
  MatButtonModule
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

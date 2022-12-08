import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPageComponent } from './info-page/info-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InfoPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class InfoModule { }

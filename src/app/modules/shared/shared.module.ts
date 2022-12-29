import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FieldErrorsComponent } from './field-errors/field-errors.component';

@NgModule({
  declarations: [
    CardComponent,
    FieldErrorsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    CardComponent,
    FieldErrorsComponent
  ]
})
export class SharedModule { }
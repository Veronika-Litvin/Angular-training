import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';
import { CardComponent } from './components/card/card.component';

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
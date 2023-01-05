import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';
import { CardComponent } from './components/card/card.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';

@NgModule({
  declarations: [
    CardComponent,
    FieldErrorsComponent,
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    CardComponent,
    FieldErrorsComponent,
    ImageUploadComponent
  ]
})
export class SharedModule { }
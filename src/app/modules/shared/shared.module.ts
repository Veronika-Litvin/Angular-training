import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FieldErrorsComponent } from './components/field-errors/field-errors.component';
import { CardComponent } from './components/card/card.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddressComponent } from './components/address/address.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateFullNamePipe } from './pipes/create-full-name.pipe';
import { AddExclamationPipe } from './pipes/exclamation.pipe';
import { HandleGenderPipe } from './pipes/handle-gender.pipe';

@NgModule({
  declarations: [
    CardComponent,
    FieldErrorsComponent,
    ImageUploadComponent,
    AddressesComponent,
    AddressComponent,
    ConfirmationModalComponent,
    SearchComponent,
    CreateFullNamePipe,
    AddExclamationPipe,
    HandleGenderPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports: [
    CardComponent,
    FieldErrorsComponent,
    ImageUploadComponent,
    AddressesComponent,
    ConfirmationModalComponent,
    SearchComponent,
    HttpClientModule,   
    CreateFullNamePipe,
    AddExclamationPipe,
    HandleGenderPipe
  ]
})
export class SharedModule { }
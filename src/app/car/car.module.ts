import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CarComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ]
})
export class CarModule { }

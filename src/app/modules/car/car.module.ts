import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CarListItemComponent } from './components/car-list-item/car-list-item.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { SharedModule } from '../shared/shared.module';
import {MatListModule} from '@angular/material/list';
import { CarRoutingModule } from './car-routing.module';

@NgModule({
  declarations: [
    CarListItemComponent,
    CarListComponent,
    CarsPageComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    SharedModule,
    MatListModule,
    CarRoutingModule
  ],
  exports: [
    CarsPageComponent,
  ],
})
export class CarModule { }

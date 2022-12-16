import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CarListItemComponent } from './components/car-list-item/car-list-item.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { SharedModule } from '../shared/shared.module';
import {MatListModule} from '@angular/material/list';

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
    MatButtonModule,
    SharedModule,
    MatListModule
  ]
})
export class CarModule { }

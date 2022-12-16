import { Component, Input } from '@angular/core';
import { ICar } from '../../models/car.interface';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  @Input() cars: ICar[] = [];
}

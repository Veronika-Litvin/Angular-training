import { Component, Input } from '@angular/core';
import { ICar } from '../../models/car.interface';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss']
})
export class CarListItemComponent {
  @Input() car!: ICar;
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICar } from '../../models/car.interface';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  @Input() cars: ICar[] = [];
  @Input() favoriteIds: number[] = [];
  @Output() updateFavoriteEvent = new EventEmitter<ICar>();

  changeFavorite(car: ICar) {
    this.updateFavoriteEvent.emit(car);
  }

  isFavorite(car: ICar): boolean {
    return this.favoriteIds.includes(car.id);
  }
}

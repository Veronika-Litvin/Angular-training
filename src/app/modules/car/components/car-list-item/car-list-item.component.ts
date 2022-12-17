import { Component, Input } from '@angular/core';
import { FavoriteDecorator } from 'src/app/modules/user/models/favorite-decorator.interface';
import { FavoriteDataService } from 'src/app/services/favorite-data.service';
import { ICar } from '../../models/car.interface';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss']
})
export class CarListItemComponent {
  @Input() car!: FavoriteDecorator<ICar>;
  @Input() isFavorite!: boolean;

  constructor(private favoriteDataService: FavoriteDataService<ICar>) {
  }
  toggleFavorits() {
    this.isFavorite = this.favoriteDataService.toggleFavoriteCars(this.car);
  }
}

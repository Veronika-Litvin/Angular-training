import { Injectable } from '@angular/core';
import { FavoriteTypes } from '../../shared/models/favorite-enum';
import { FavoriteDataService } from '../../shared/services/favorite-data.service';
import { cars } from '../mocks/car-list';
import { ICar } from '../models/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars!: ICar[];

  constructor( private favoriteService: FavoriteDataService) {
    this.cars = cars;
  }

  getCars(): ICar[] {
    return this.cars;
  }

  getFavoriteCars(): ICar[] {
    const favoriteIds = this.favoriteService.getFavorites(FavoriteTypes.Car);
    return this.getCars().filter((car) => {
      return favoriteIds.includes(car.id);
    });
  }
}

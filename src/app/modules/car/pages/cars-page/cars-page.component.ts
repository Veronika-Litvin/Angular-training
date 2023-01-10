import { Component, OnInit } from '@angular/core';
import { FavoriteTypes } from 'src/app/modules/shared/models/favorite.enum';
import { FavoriteDataService } from 'src/app/modules/shared/services/favorite-data.service';
import { ICar } from '../../models/car.interface';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss']
})
export class CarsPageComponent implements OnInit{
  cars: ICar[] = [];
  favoriteCars: ICar[] = [];
  favoriteIds: number[] = [];

  constructor(private carService: CarService, private favoriteDataService: FavoriteDataService) {
  }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
    this.favoriteIds = this.favoriteDataService.getFavorites(FavoriteTypes.Car)
    this.favoriteCars = this.carService.getFavoriteCars();
  }

  updateFavoriteCar(car: ICar): void {
    this.favoriteIds = this.favoriteDataService.updateFavoriteItems(FavoriteTypes.Car, car.id);
    this.favoriteCars = this.carService.getFavoriteCars();
  }
}

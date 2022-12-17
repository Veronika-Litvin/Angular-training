import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteDecorator } from 'src/app/modules/user/models/favorite-decorator.interface';
import { FavoriteDataService } from 'src/app/services/favorite-data.service';
import { ICar } from '../../models/car.interface';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss']
})
export class CarsPageComponent implements OnInit{
  cars: FavoriteDecorator<ICar>[] = [];
  favoriteCars: FavoriteDecorator<ICar>[] = [];

  constructor(private carService: CarService, private router: Router, private favoriteDataService: FavoriteDataService<ICar>) {
  }

  ngOnInit(): void {
    this.cars = this.carService.getCars();
    this.favoriteCars = this.favoriteDataService.getFavoriteCars();
  }
  navigateUserPage() {
    this.router.navigate(['user']);
  }
}

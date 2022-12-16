import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICar } from '../../models/car.interface';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss']
})
export class CarsPageComponent implements OnInit{
  cars: ICar[] = [];

  constructor(private carService: CarService, private router: Router) {
  }
  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }
  navigateUserPage() {
    this.router.navigate(['user']);
  }
}

import { Injectable } from '@angular/core';
import { ICar } from '../models/car.interface';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  getCars(): ICar[] {
    return [
      {id: 1, name: 'Toyota', color: 'white', releaseYear: 2005, number: 1812, imageUrl: '../../../../assets/toyota.jpg'},
      {id: 2, name: 'BMW', color: 'gray', releaseYear: 2016, number: 2434, imageUrl: '../../../../assets/bmw.jpg'},
      {id: 3, name: 'Audi', color: 'black', releaseYear: 1999, number: 3754, imageUrl: '../../../../assets/audi.jpg'},
      {id: 4, name: 'Ford', color: 'white', releaseYear: 2020, number: 2753, imageUrl: '../../../../assets/ford.jpg'},
      {id: 5, name: 'Lada', color: 'gray', releaseYear: 1995, number: 7675, imageUrl: '../../../../assets/lada.jpg'},
      {id: 6, name: 'Mazda', color: 'white', releaseYear: 2019, number: 4545, imageUrl: '../../../../assets/mazda.jpg'},
  ]
  }
}

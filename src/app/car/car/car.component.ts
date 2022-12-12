import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  favoriteCar = '';

  constructor(private router: Router) { }

  navigateUserPage() {
    this.router.navigate(['user']);
  }
}

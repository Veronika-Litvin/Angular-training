import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/authorization/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router, private authService: AuthService) {}

  navigateUserPage(): void {
    this.router.navigate(['user']);
  }

  navigateCarPage(): void {
    this.router.navigate(['car']);
  }

  navigateUserCreatePage(): void {
    this.router.navigate(['create-user']);
  }

  logOutUser() {
    this.authService.logOut();
  }
}

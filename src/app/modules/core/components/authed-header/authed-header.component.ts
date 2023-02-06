import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-authed-header',
  templateUrl: './authed-header.component.html',
  styleUrls: ['./authed-header.component.scss']
})
export class HeaderComponent {

  currentUser = localStorage.getItem('currentUser');

  constructor(private authService: AuthService) {}

  logOutUser() {
    this.authService.logOut();
  }
}

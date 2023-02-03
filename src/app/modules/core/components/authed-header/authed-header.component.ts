import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/shared/services/auth.service';

@Component({
  selector: 'app-authed-header',
  templateUrl: './authed-header.component.html',
  styleUrls: ['./authed-header.component.scss']
})
export class HeaderComponent {

  currentUser = '';

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe(user => {
        this.currentUser = user;
    });
}
  logOutUser() {
    this.authService.logOut();
  }
}

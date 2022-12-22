import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-creation-page',
  templateUrl: './user-creation-page.component.html',
  styleUrls: ['./user-creation-page.component.scss']
})
export class UserCreationPageComponent {
  
  constructor(private userService: UserService, private router: Router) {}

  saveNewUser(user: IUser) {
    user.imageUrl = '../../../../../assets/unknown.png';
    user.id = Date.now();
    this.userService.createUser(user);
    console.log(user);
    this.router.navigate(['user']);
  }

}

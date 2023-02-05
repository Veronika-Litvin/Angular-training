import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  currentUser: IUser | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser(this.route.parent!).subscribe(
      (value) => this.currentUser = value
    )
  }

}

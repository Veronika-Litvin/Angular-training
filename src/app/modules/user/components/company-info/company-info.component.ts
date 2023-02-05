import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  currentUser: IUser | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userService.getCurrentUser(this.route.parent!).subscribe(
      (value) => this.currentUser = value
    )
  }

}

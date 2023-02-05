import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { IUser } from '../../models/user.interface';
import { UserApiService } from '../../services/user-api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit {

  // navLinks = ['company-info', 'personal-info', 'contacts'];
  // activeLink = this.navLinks[0];

  id!: string;

  currentUser: IUser | undefined;

  navLinks: { path: string, label: string }[] = [];

  constructor(private route: ActivatedRoute, private userApiService: UserApiService,
    private userService: UserService) { }

  ngOnInit() {
    this.navLinks = (
      this.route.routeConfig && this.route.routeConfig.children ?
        this.buildNavItems(this.route.routeConfig.children) :
        []
    );

    this.userService.getCurrentUser(this.route).subscribe(
      (value) => this.currentUser = value
    )
  }

  buildNavItems(routes: Routes) {
    return (routes)
      .filter(route => route.path)
      .map(({ path = '', data }) => ({
        path: path,
        label: data!['label'],
      }));
  }
}

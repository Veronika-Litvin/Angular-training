import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { RouterLinkInterface } from 'src/app/modules/shared/models/router-link.interface';
import { IUser } from '../../models/user.interface';
import { UserApiService } from '../../services/user-api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit, OnDestroy {

  // navLinks = ['company-info', 'personal-info', 'contacts'];
  // activeLink = this.navLinks[0];

  id!: string;

  currentUser: IUser | null = null;

  navLinks: RouterLinkInterface[] = [];

  activeLink!: RouterLinkInterface;

  subscriptions: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute, private userApiService: UserApiService,
    private userService: UserService) {}

  ngOnInit(): void {
    this.navLinks = (
      this.route.routeConfig && this.route.routeConfig.children ?
        this.buildNavItems(this.route.routeConfig.children) :
        []
    );

    this.activeLink = this.navLinks[0];

    this.userService.updateCurrentUser(this.route)
    .pipe(
      takeUntil(this.subscriptions)
    ).subscribe(
      (value) => this.currentUser = value
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.next();
}

  buildNavItems(routes: Routes): RouterLinkInterface[] {
    return (routes)
      .filter(route => route.path)
      .map(({ path = '', data }) => ({
        path: path,
        label: data!['label'],
      }));
  }
}

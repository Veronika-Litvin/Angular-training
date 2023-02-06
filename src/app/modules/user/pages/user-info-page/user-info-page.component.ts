import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { mergeMap, Subject } from 'rxjs';
import { RouterLinkInterface } from 'src/app/modules/shared/models/router-link.interface';
import { IUser } from '../../models/user.interface';
import { UserApiService } from '../../services/user-api.service';
import { UserInfoPageService } from '../../services/user-info-page.service';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.scss']
})
export class UserInfoPageComponent implements OnInit, OnDestroy {

  id!: string;

  currentUser: IUser | undefined;

  navLinks: RouterLinkInterface[] = [];

  private subscriptions: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute, private userApiService: UserApiService, private userInfoPageService: UserInfoPageService) {}

  ngOnInit(): void {
    this.navLinks = (
      this.route.routeConfig && this.route.routeConfig.children ?
        this.buildNavItems(this.route.routeConfig.children) :
        []
    );

    this.route.params
    .pipe(
        mergeMap(params => {
            return this.userApiService.getUserById(params['id']);
        })
    )
    .subscribe(user => {
        this.currentUser = user; 
        this.userInfoPageService.updateCurrentUser(user!);
    });
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

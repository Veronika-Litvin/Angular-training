import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit, OnDestroy {

  currentUser: IUser | null = null;

  subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.subscription.add(this.userService.getSavedCurrentUser().subscribe(
      (value) => this.currentUser = value
    ))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from '../../models/user.interface';
import { UserInfoPageService } from '../../services/user-info-page.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit, OnDestroy {

  currentUser: IUser | null = null;

  subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private userInfoPageService: UserInfoPageService) { }

  ngOnInit(): void {
    this.subscription.add(
        this.userInfoPageService.getSavedCurrentUser().subscribe(
        (value) => this.currentUser = value
      )
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
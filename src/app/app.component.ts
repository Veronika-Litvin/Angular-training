import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-training';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .subscribe(
        (event) => {
          if (event instanceof NavigationEnd) {
            console.log(`You have visited the page '${event.url}'`);
          }
        });
  }
}

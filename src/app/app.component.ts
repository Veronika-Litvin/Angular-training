import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-training';

  showHead = false;

  constructor(private router: Router) {
    this.router.events
      .subscribe(
        (event) => {
          if (event instanceof NavigationStart) {
            console.log(`You have visited the page '${event.url}'`);
          }
          if (event instanceof NavigationStart) {
            if (event.url == '/signin' || event['url'] == '/signup') {
              this.showHead = false;
            } else {
              this.showHead = true;
            }
          }
        });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  href = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
}
  navigateInfoPage() {
    this.router.navigate(['info'])
  }

}

import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent {
  href = '';
  name = 'Mrs Norris';
  description = 'Good person';
  src = '../../../assets/mrs-norris.png';

  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
  }

  navigateHome() {
    this.router.navigate(['home'])
  }

  substituteImage(event: MatSelectChange) {
    if(event.value == 'male') {
      this.src = '../../../assets/male-avatar.jpg';
    }else {
      this.src = '../../../assets/female-avatar.jpg';
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-creation-page',
  templateUrl: './user-creation-page.component.html',
  styleUrls: ['./user-creation-page.component.scss']
})
export class UserCreationPageComponent implements OnInit {

  userPageForm!: FormGroup;

  isClickSubmit = false;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userPageForm = this.formBuilder.group({});
  }

  addChildForm(form: FormGroup, key: string) {
    this.userPageForm.addControl(key, form);
  }

  saveNewUser() {
    this.isClickSubmit = true;
    this.userPageForm.markAllAsTouched();
    if (this.userPageForm.valid) {
      this.userService.createUser(this.userPageForm.value.user, this.userPageForm.value.addresses).subscribe((isSuccessfully) => {
        if (isSuccessfully) {
          this.router.navigate(['user']);
          this.isClickSubmit = false;
      } else {
          console.log('error')
      }
      });
    }
  }
}

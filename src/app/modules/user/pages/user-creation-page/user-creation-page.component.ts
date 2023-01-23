import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-user-creation-page',
  templateUrl: './user-creation-page.component.html',
  styleUrls: ['./user-creation-page.component.scss']
})
export class UserCreationPageComponent implements OnInit {

  userPageForm!: FormGroup;

  isClickSubmit = false;

  constructor(private userApiService: UserApiService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userPageForm = this.formBuilder.group({});
  }

  addChildForm(form: FormGroup, key: string): void {
    this.userPageForm.addControl(key, form);
  }

  saveNewUser(): void {
    this.isClickSubmit = true;
    this.userPageForm.markAllAsTouched();
    if (this.userPageForm.valid) {
      this.userApiService.createUser(this.userPageForm.value.user, this.userPageForm.value.addresses).subscribe((isSuccessfully) => {
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

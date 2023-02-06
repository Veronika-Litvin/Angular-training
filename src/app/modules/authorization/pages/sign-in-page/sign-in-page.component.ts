/* eslint-disable no-useless-escape */
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  authForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(23)]],
    password: ['', [Validators.required]],
  })

  get authFormControl(): { [key: string]: AbstractControl } {
    return this.authForm.controls;
  }

  login(): void {
    this.authForm.markAllAsTouched();

    if (this.authForm.valid) {
      const formValue = this.authForm.value;
      this.authService.loginUser(formValue)
        .subscribe((isSuccess) => {
          console.log(isSuccess)
          isSuccess ? this.router.navigate(['home']) : alert('Incorrect user name or password');
        });
    }
  }
}

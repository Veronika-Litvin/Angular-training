/* eslint-disable no-useless-escape */
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  authForm: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(23)]],
    password: ['',  [Validators.required]],
  })

  get authFormControl(): { [key: string]: AbstractControl } {
    return this.authForm.controls;
  }

  login(): void {
    console.log('work')
    if (this.authForm.valid &&
      this.authService.loginUser({name: this.authForm.value.userName, password: this.authForm.value.password})) {
      localStorage.setItem('currentUser', this.authForm.value.userName);
        this.router.navigate(['home']);
      }else {
        alert('Incorrect user name or password');
      }
  }
}

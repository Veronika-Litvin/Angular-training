/* eslint-disable no-useless-escape */
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { confirmPassValidator } from '../../../shared/utils/confirm-pass.validator';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  signUpPageForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.signUpPageForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(23)]],
      passGroup: this.formBuilder.group({
        password: ['', [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]],
        confirmPassword: ['', [Validators.required]]
      })
    });

    const passwordControl = this.passGroup.get('password') as AbstractControl;
    const confirmationControl = this.passGroup.get('confirmPassword')  as AbstractControl;

    this.passGroup.setValidators(confirmPassValidator(passwordControl, confirmationControl));
  }

  get passGroupControl(): { [key: string]: AbstractControl } {
    return this.passGroup.controls;
  }

  get passGroup(): FormGroup {
    return this.signUpPageForm.controls['passGroup'] as FormGroup;
  }

  registerUser(): void {
    this.signUpPageForm.markAllAsTouched();
    if (this.signUpPageForm.valid) {
      const formValues = this.signUpPageForm.value;
      this.authService.registerUser(formValues).subscribe(isSuccess => {
        console.log(isSuccess)
        if (isSuccess) {
          this.router.navigate(['home']);
        }
      });
    }
  }
}

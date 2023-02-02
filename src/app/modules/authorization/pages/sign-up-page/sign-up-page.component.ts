/* eslint-disable no-useless-escape */
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { confirmPassValidator } from '../../utils/confirm-pass.validator';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit{

  signUpPageForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.signUpPageForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(23)]],
      passGroup: this.formBuilder.group({
        password: ['',  [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]],
        confirmPassword: ['',  [Validators.required]]
      }, { validator: confirmPassValidator })
    });
  }
  
  get passGroupControl(): { [key: string]: AbstractControl } {
    return this.passGroup.controls;
  }

  get passGroup(): FormGroup {
    return this.signUpPageForm.controls['passGroup'] as FormGroup;
  }

  registerUser(): void {
    this.signUpPageForm.markAllAsTouched();
    if(this.signUpPageForm.valid) {
      const formValues = this.signUpPageForm.value;
      this.authService.registerUser({name: formValues.userName, password: formValues.passGroup.password});
      this.router.navigate(['home']);
    }
  }
}

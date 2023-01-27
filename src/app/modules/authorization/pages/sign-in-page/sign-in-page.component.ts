/* eslint-disable no-useless-escape */
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {
  constructor(private formBuilder: FormBuilder) { }

  authForm: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(13)]],
    password: ['',  [Validators.required, Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/')]],
  })

  get authFormControl(): { [key: string]: AbstractControl } {
    return this.authForm.controls;
  }
}

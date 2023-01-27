/* eslint-disable no-useless-escape */
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPassValidator } from '../../utils/confirm-pass.validator';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit{

  signUpPageForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.signUpPageForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(13)]],
      passGroup: this.formBuilder.group({
        password: ['',  [Validators.required, Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/')]],
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
  
}

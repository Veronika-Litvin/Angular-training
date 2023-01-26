import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      confirmPassword: ['',  [Validators.required]]
    });
  }

  addChildForm(form: FormGroup, key: string): void {
    this.signUpPageForm.addControl(key, form);
  }
  
  get confirmPasswordControl(): AbstractControl  {
    return this.signUpPageForm.controls['confirmPassword'];
  }
  
}

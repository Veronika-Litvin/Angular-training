/* eslint-disable no-useless-escape */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Output() initAuthForm = new EventEmitter<FormGroup>();

  constructor(private formBuilder: FormBuilder) { }

  authForm: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(13)]],
    password: ['',  [Validators.required, Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/')]],
  })

  ngOnInit(): void {
    this.initAuthForm.emit(this.authForm);
  }

  get authFormControl(): { [key: string]: AbstractControl } {
    return this.authForm.controls;
  }

}

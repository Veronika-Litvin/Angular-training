import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gmailFormatValidator } from 'src/app/modules/shared/services/email-format-validator';
import { CheckRepeatingEmailValidator } from '../../../shared/services/check-repeating-email.validator';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.scss']
})

export class UserCreateFormComponent implements OnInit {
  @Output() initChildForm = new EventEmitter<FormGroup>();

  @Input() isEditEmail!: string;

  creationUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private checkRepeatingEmailValidator: CheckRepeatingEmailValidator) { }

  ngOnInit(): void {
    this.createForm();
    this.initChildForm.emit(this.creationUserForm);
  }

  private createForm(): void {
    this.creationUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(15), Validators.max(100)]],
      userEmail: ['', {
        validators: [Validators.required, Validators.email, gmailFormatValidator],
        asyncValidators: [this.checkRepeatingEmailValidator.validate(this.isEditEmail)]
      }],
      company: ['', [Validators.required, Validators.maxLength(35)]],
      department: ['', [Validators.required, Validators.minLength(6)]],
      gender: [null, Validators.required],
      imageUrl: [null]
    })
  }

  get creationUserFormControl(): { [key: string]: AbstractControl } {
    return this.creationUserForm.controls;
  }

}
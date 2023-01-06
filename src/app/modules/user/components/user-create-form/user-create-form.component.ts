import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { gmailFormatValidator } from 'src/app/modules/shared/services/email-format-validator';
import { CheckRepeatingEmailValidator } from '../../../shared/services/check-repeating-email.validator';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.scss']
})

export class UserCreateFormComponent implements OnInit {
  @Output() initeChildForm = new EventEmitter<FormGroup>();

  creationUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private checkRepeatingEmailValidator: CheckRepeatingEmailValidator) { }

  ngOnInit(): void {
    this.createForm();
    this.initeChildForm.emit(this.creationUserForm);
  }

  private createForm(): void {
    this.creationUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(15), Validators.max(100)]],
      userEmail: ['', {
        validators: [Validators.required, Validators.email, gmailFormatValidator],
        asyncValidators: [this.checkRepeatingEmailValidator.validate()]
      }],
      company: ['', [Validators.required, Validators.maxLength(35)]],
      department: ['', [Validators.required, Validators.minLength(6)]],
      gender: [null, Validators.required],
      imageUrl: [null]
    })
  }

  get creationUserFormControl() {
    return this.creationUserForm.controls;
  }

}
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckRepeatingEmailValidator } from '../../services/check-repeating-email.validator';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.scss']
})
export class UserCreateFormComponent implements OnInit {
  @Input() userPageForm!: FormGroup;

  creationUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private checkRepeatingEmailValidator: CheckRepeatingEmailValidator) {}

  ngOnInit(): void {
    this.createForm();
    this.userPageForm.addControl('user', this.creationUserForm);
  }

  private createForm(): void {
    this.creationUserForm  = this.formBuilder.group({           
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: [null, [Validators.required, Validators.min(15), Validators.max(100)]],
    userEmail: ['', [Validators.required, Validators.email , Validators.pattern("^.+@gmail\\.com$")], this.checkRepeatingEmailValidator.uniqueEmailValidator()],
    company: ['', [Validators.max(35)]],
    department: ['', [Validators.min(6)]],
    gender: [null, Validators.required]
})}

  get creationUserFormControl() {
    return this.creationUserForm.controls;
  }
}

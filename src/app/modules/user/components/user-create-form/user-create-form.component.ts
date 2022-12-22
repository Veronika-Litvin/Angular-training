import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.scss']
})
export class UserCreateFormComponent {
  @Output() saveNewUserEvent = new EventEmitter();

  creationUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.creationUserForm  = this.formBuilder.group({           
    firstName: '',
    lastName: '',
    age: null,
    userEmail: '',
    company: '',
    department: '',
    gender: null
})}

  saveNewUser(): void {
    this.saveNewUserEvent.emit(this.creationUserForm.value);
  }
}

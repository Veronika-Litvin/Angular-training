import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-create-form',
  templateUrl: './user-create-form.component.html',
  styleUrls: ['./user-create-form.component.scss']
})
export class UserCreateFormComponent implements OnInit {
  @Input() userPageForm!: FormGroup;

  creationUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.userPageForm.addControl('user', this.creationUserForm);
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
}

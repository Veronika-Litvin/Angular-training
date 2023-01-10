import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss']
})
export class UserEditPageComponent implements OnInit {
  editPageForm!: FormGroup;

  isClickSubmit = false;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editPageForm = this.formBuilder.group({});
  }

  addChildForm(form: FormGroup, key: string) {
    this.editPageForm.addControl(key, form);
  }

  editUser() {
    this.isClickSubmit = true;
    this.editPageForm.markAllAsTouched();
    if (this.editPageForm.valid) {
      this.userService.createUser(this.editPageForm.value.user, this.editPageForm.value.addresses);
      this.router.navigate(['user']);
      this.isClickSubmit = false;
    }
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-creation-page',
  templateUrl: './user-creation-page.component.html',
  styleUrls: ['./user-creation-page.component.scss']
})
export class UserCreationPageComponent {

  creationUserForm : FormGroup = new FormGroup({
             
    "firstName": new FormControl(),
    "lastName": new FormControl(),
    "age": new FormControl(),
    "email": new FormControl(),
    "userEmail": new FormControl(),
    "company": new FormControl(),
    "department": new FormControl(),
    "gender": new FormControl(),
});

}

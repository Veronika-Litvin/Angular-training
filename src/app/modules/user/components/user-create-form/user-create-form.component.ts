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

  msg!: string;

  constructor(private formBuilder: FormBuilder, private checkRepeatingEmailValidator: CheckRepeatingEmailValidator) { }

  ngOnInit(): void {
    this.createForm();
    this.userPageForm.addControl('user', this.creationUserForm);
  }

  private createForm(): void {
    this.creationUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(15), Validators.max(100)]],
      userEmail: ['', {
        validators: [Validators.required, Validators.email, Validators.pattern("^.+@gmail\\.com$")],
        asyncValidators: [this.checkRepeatingEmailValidator.uniqueEmailValidator()]
      }],
      company: ['', [Validators.maxLength(35)]],
      department: ['', [Validators.minLength(6)]],
      gender: [null, Validators.required],
      imageUrl: [null]
    })
  }

  get creationUserFormControl() {
    return this.creationUserForm.controls;
  }

  uploadImageUrl(event: Event) {
    const target= event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

		const mimeType = file.type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onload = () => {
			this.msg = "";
			this.userPageForm.value.user.imageUrl = reader.result; 
		}
	}
}

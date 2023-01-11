import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { merge, of, Subscription, switchMap } from 'rxjs';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss']
})
export class UserEditPageComponent implements OnInit, OnDestroy {
  editPageForm!: FormGroup;

  isClickSubmit = false;

  currentUser!: IUser;

  subscriptions: Subscription[] = [];

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editPageForm = this.formBuilder.group({});
  }

  get addresses(): FormArray {
    return this.editPageForm.get('addresses') as FormArray;
  }


  addChildForm(form: FormGroup, key: string) {
    this.editPageForm.addControl(key, form);

    const patchSubscription = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('id'))
      )
    ).subscribe(currentUserId => {
      this.currentUser = this.userService.getUsers().find(user => user.id === Number(currentUserId))!;
      this.editPageForm.get('user')!.patchValue(this.currentUser);
      if (this.addresses) {
        this.addresses.patchValue(this.currentUser.addresses);
      }
    });

    this.subscriptions.push(patchSubscription);

    this.checkValueChanges();
  }

  checkValueChanges() {
    const firstNameControl = this.editPageForm.controls['user'].get('firstName');
    const lastNameControl = this.editPageForm.controls['user'].get('lastName');

    const valueChangesSubscription = merge(
      firstNameControl!.valueChanges,
      lastNameControl!.valueChanges
    ).subscribe(() => {
      const value = `${firstNameControl!.value.toLowerCase()}.${lastNameControl!.value.toLowerCase()}@gmail.com`
      this.editPageForm.get('user')!.get('userEmail')!.setValue(value);
    })

    this.subscriptions.push(valueChangesSubscription);
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

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

}

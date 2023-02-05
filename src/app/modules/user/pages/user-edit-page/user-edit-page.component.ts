import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { merge, Subscription } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/modules/core/guards/leave-page.guard';
import { IUser } from '../../models/user.interface';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss']
})
export class UserEditPageComponent implements OnInit, OnDestroy, CanDeactivateComponent {
  editPageForm!: FormGroup;

  isClickSubmit = false;

  currentUser: IUser | null | undefined = null;

  subscriptions: Subscription[] = [];

  id!: number;

  email!: string;

  constructor(private userApiService: UserApiService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editPageForm = this.formBuilder.group({
      addresses: this.formBuilder.array([])
    });

    // const routeSubscription = this.route.params.subscribe((params) => {
    //   this.id = +params['id'];

    //   this.userApiService
    //     .getUserId(this.id)
    //     .pipe(take(1))
    //     .subscribe((value) => {
    //       console.log(value)
    //       this.currentUser = value;
    //       this.email = value!.userEmail;
    //       for (const address of this.currentUser!.addresses) {
    //         this.addresses.push(this.formBuilder.group({}));
    //       }

    //       setTimeout(() => {
    //         this.editPageForm.get('user')!.patchValue(this.currentUser);
    //         this.addresses.patchValue(this.currentUser!.addresses);
    //         this.checkValueChanges();
    //       }, 0);

    //     });
    // });
    // this.subscriptions.push(routeSubscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  canDeactivate(): boolean {
    return this.isClickSubmit || !this.editPageForm.dirty;
  }

  get addresses(): FormArray {
    return this.editPageForm.get('addresses') as FormArray;
  }

  addChildForm(form: FormGroup, key: string): void {
    this.editPageForm.addControl(key, form);
  }

  checkValueChanges(): void {
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

  editUser(): void {
    this.isClickSubmit = true;
    this.editPageForm.markAllAsTouched();
    if (this.editPageForm.valid || this.editPageForm.pristine) {
      this.userApiService.updateUser(this.currentUser!.id, this.editPageForm.value.user, this.editPageForm.value.addresses).subscribe((isSuccessfully) => {
        if (isSuccessfully) {
          this.router.navigate(['user']);
        } else {
          console.log('error')
        }
      });
    }
  }

}

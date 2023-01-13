import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { merge, Subscription } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/modules/shared/guards/leave-page.guard';
import { IUser } from '../../models/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.scss']
})
export class UserEditPageComponent implements OnInit, OnDestroy, AfterViewInit, CanDeactivateComponent {
  editPageForm!: FormGroup;

  isClickSubmit = false;

  currentUser: IUser | null = null;

  id!: number;

  subscriptions: Subscription[] = [];

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.editPageForm = this.formBuilder.group({});

    const patchSubscription = this.route.paramMap
    .subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      const user = this.userService.getUserById(this.id);

      if(user) {
        this.currentUser = user;
      }
    });

    this.subscriptions.push(patchSubscription);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.editPageForm.get('user')!.patchValue(this.currentUser);
      if (this.addresses) {
        this.addresses.patchValue(this.currentUser!.addresses);
      }
    });
    this.checkValueChanges();
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
    if (this.editPageForm.valid) {
      this.userService.updateUser(this.id, this.editPageForm.value.user, this.editPageForm.value.addresses);
      this.router.navigate(['user']);
    }
  }

}

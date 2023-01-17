import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit, OnDestroy {
  @Input() address!: AbstractControl;

  subscription: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addressForm.addControl('addressLine', this.formBuilder.control(null, Validators.required));
    this.addressForm.addControl('city', this.formBuilder.control(null));
    this.addressForm.addControl('zip', new FormControl({ value: null, disabled: true }, Validators.required));

    this.subscription.add(this.addressForm.get('city')!.valueChanges.subscribe(value => {
      const zip: AbstractControl = this.addressForm.get('zip')!;

      if (value) {
        zip.enable();
      } else {
        zip.setValue('');
        zip.disable();
      }
    })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get addressForm() {
    return this.address as FormGroup;
  }
}

import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit, OnDestroy {

  @Output() initAddresses = new EventEmitter<FormArray>();

  @Input() addressesAmount!: number;

  subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder) { }

  addressesForm = this.formBuilder.group({
    addresses: this.formBuilder.array([])
  });

  ngOnInit(): void {
    this.addAddress(this.addressesAmount);
    this.initAddresses.emit(this.addresses);
  }

  get addresses(): FormArray {
    return this.addressesForm.controls["addresses"] as FormArray;
  }

  addAddress(addressesAmount: number) {
    for(let i = 0; i < addressesAmount; i++) {

    const addressForm = this.formBuilder.group({
      addressLine: ['', [Validators.required, Validators.minLength(4)]],
      city: [''],
      zip: [{ value: null, disabled: true }, Validators.required],
    });

    const addressFormSubscription = addressForm.get('city')!.valueChanges.subscribe(value => {
      if (value) {
        addressForm.get('zip')!.enable();
        addressForm.get('zip')!.setErrors({ 'customRequired': true });
      } else {
        addressForm.get('zip')!.disable();
      }
    });
      this.subscriptions.push(addressFormSubscription);
      this.addresses.push(addressForm);
    }
  }

  removeAddress(i: number, e: Event) {
    e.preventDefault();
    this.addresses.removeAt(i);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}

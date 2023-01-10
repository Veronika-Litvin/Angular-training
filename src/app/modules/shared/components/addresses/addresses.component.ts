import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {

  @Output() initAddresses = new EventEmitter<FormArray>();

  constructor(private formBuilder: FormBuilder) { }

  addressesForm = this.formBuilder.group({
    addresses: this.formBuilder.array([])
  });

  ngOnInit(): void {
    this.addAddress();
    this.initAddresses.emit(this.addresses);
  }

  get addresses(): FormArray {
    return this.addressesForm.controls["addresses"] as FormArray;
  }

  addAddress() {
    const addressForm = this.formBuilder.group({
      addressLine: ['', [Validators.required, Validators.minLength(4)]],
      city: [''],
      zip: [{ value: null, disabled: true }, Validators.required],
    });

    addressForm.get('city')!.valueChanges.subscribe(value => {
      if (value) {
        addressForm.get('zip')!.enable();
        addressForm.get('zip')!.setErrors({ 'customRequired': true });
      } else {
        addressForm.get('zip')!.disable();
      }
    });
    this.addresses.push(addressForm);
  }

  removeAddress(i: number, e: Event) {
    e.preventDefault();
    this.addresses.removeAt(i);
  }
}

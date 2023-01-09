import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddressValidator } from '../../services/address.validator';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {

  @Output() initAddresses = new EventEmitter<FormArray>();

  form!: FormGroup;

  impossibleRemoval = false;

  get addressesForm() {
    return this.form.controls["addressesForm"] as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initAddressesForm();
    this.form = this.formBuilder.group({
      addressesForm: this.formBuilder.array([this.initAddressesForm()])
    })

    this.initAddresses.emit(this.addressesForm);
  }

  initAddressesForm() {
    return this.formBuilder.group({
      addressLine: ['', [Validators.required, Validators.minLength(4)]],
      city: [''],
      zip: [{ value: null, disabled: true }],
    }, { validators: AddressValidator });
  }

  get addressesControls() {
    return this.addressesForm.controls;
  }

  addAddress(e: Event) {
    e.preventDefault();
    this.addressesForm.push(this.initAddressesForm());
    this.impossibleRemoval = false;
  }

  removeAddress(i: number, e: Event) {
    e.preventDefault();
    if (this.addressesForm.length > 1) {
      this.addressesForm.removeAt(i);
      this.impossibleRemoval = false;
    } else {
      this.impossibleRemoval = true;
    }
  }

}

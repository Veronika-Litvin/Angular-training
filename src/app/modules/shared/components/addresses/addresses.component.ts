import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { addressValidator } from '../../services/address.validator';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {

  @Output() initAddresses = new EventEmitter<FormArray>();

  form!: FormGroup;

  get addressesForm() {
    return this.form.controls["addressesForm"] as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      addressesForm: this.formBuilder.array([this.initAddressesForm()])
    })
    
    this.initAddresses.emit(this.addressesForm);
  }

  initAddressesForm() {
   return this.formBuilder.group({
        addressLine: ['', [Validators.required, Validators.minLength(4)]],
        city: ['dc'],
        zip: [123456],
    });
  }

  get addressesControls() {
    return this.addressesForm.controls;
  }

  get formArrayControls() {
    for (const control of this.addressesForm.controls) {
      if (control instanceof FormGroup) {
         return control.controls;
      }
   }
   return null
  }



  addAddress(e: Event) {
    e.preventDefault();
    this.addressesForm.push(this.initAddressesForm());
  }

  removeAddress(i: number) {
    if (this.addressesForm.length > 1) {
      this.addressesForm.removeAt(i);
    }
  }

}

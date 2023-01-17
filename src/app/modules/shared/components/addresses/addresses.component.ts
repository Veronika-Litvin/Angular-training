import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {

  @Output() initAddresses = new EventEmitter<FormArray>();

  @Input() initialArray!: FormArray;

  addressesForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addressesForm = this.formBuilder.group({
      addresses: this.initialArray || this.formBuilder.array([this.formBuilder.group({})]),
    });
    this.initAddresses.emit(this.addresses);
  }

  get addresses(): FormArray {
    return this.addressesForm.controls["addresses"] as FormArray;
  }

  addAddress(): void {
    this.addresses.push(this.formBuilder.group({}));
  }

  removeAddress(i: number, e: Event): void {
    e.preventDefault();
    this.addresses.removeAt(i);
  }
}

import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent{
  @Input() address!: AbstractControl;

   get addressForm() {
    return this.address as FormGroup;
  }
}

import { FormGroup } from "@angular/forms";

export function confirmPassValidator(formGroup: FormGroup) {
    if(formGroup.controls['password'].value !== formGroup.controls['confirmPassword'].value && formGroup.controls['confirmPassword'].value) {
        formGroup.controls['confirmPassword'].setErrors({'mismatch': true})
    }
  }
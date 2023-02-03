import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmPassValidator(firstControl: AbstractControl, secondControl: AbstractControl): ValidatorFn {
    return (group: AbstractControl) : ValidationErrors | null => {
        if(firstControl.value !== secondControl.value && secondControl.value) {
            secondControl.setErrors({'mismatch': true});
            return {'mismatch': true};
        }
        return null;
    }
  }
import { AbstractControl, FormGroup } from "@angular/forms";

export function addressValidator(group: FormGroup) {
    group.get('city')?.valueChanges.subscribe(value => {
        if (value.length > 0) {
            group.get('zip')?.setValidators([customRequiredValidator]);
            group.get('zip')?.enable();
        } else {
            group.get('zip')?.clearValidators();
            group.get('zip')?.disable();
        }
        group.get('zip')?.updateValueAndValidity();
    });
}

function customRequiredValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (!control.value) {
        return { 'customRequired': true };
    }
    return null;
}
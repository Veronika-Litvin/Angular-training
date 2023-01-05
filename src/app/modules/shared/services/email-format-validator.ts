import { FormControl, ValidationErrors } from "@angular/forms";

export function gmailFormatValidator(control: FormControl): ValidationErrors | null {

    if (control.value.endsWith('@gmail.com') || !control.value.length) {
        return null;
    }
    return { 'gmailFormat': true };
}
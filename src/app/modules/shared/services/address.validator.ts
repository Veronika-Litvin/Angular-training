import { FormGroup } from "@angular/forms";

export function addressValidator(group: FormGroup) {
    const city = group.get('city');
    const zip = group.get('zip');

    if(city?.value) {
        zip?.setErrors({required: true});
    }else {
        zip?.setErrors({required: true});
    }
  }
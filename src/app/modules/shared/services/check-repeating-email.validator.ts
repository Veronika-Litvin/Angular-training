import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { UserService } from "../../user/services/user.service";

@Injectable({ providedIn: 'root' })

export class CheckRepeatingEmailValidator {
  constructor(private userService: UserService) { }

  emailExists(email: string): Observable<boolean> {
    return this.userService.getUsers().pipe(
      map(users => {
        return users.map(user => user.userEmail).includes(email)
      })
    );
  }

  validateEditedEmail(currentEmail: string): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (control.value === currentEmail) {
        return of(null)
      } else {
        return this.validate(control)
      }
    }
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.emailExists(control.value).pipe(
      map((exists) => (exists ? { emailExists: true } : null)),
      catchError(() => of(null))
    );
  }
}

import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { catchError, delay, map, Observable, of } from "rxjs";
import { UserService } from "../../user/services/user.service";

@Injectable({ providedIn: 'root' })

export class CheckRepeatingEmailValidator {
  constructor(private userService: UserService) { }

  emailExists(email: string): Observable<boolean> {
    return of(email).pipe(
      delay(500),
      map((email) => {
        const emails = this.userService.getUsers().map(user => user.userEmail);
        return emails.includes(email);
      })
    );
  }

  validate(email: string): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (email === control.value) {
        return of(null)
      }
      return this.emailExists(control.value).pipe(
        map((exists) => (exists ? { emailExists: true } : null)),
        catchError(() => of(null))
      );
    };
  }
}

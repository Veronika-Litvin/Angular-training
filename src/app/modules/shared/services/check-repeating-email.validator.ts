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

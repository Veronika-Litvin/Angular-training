import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ConfirmationModalComponent } from '../components/confirmation-modal/confirmation-modal.component';
import { getDialogConfig } from '../mocks/dialog.config';
import { map } from 'rxjs/operators';

export interface CanDeactivateComponent {
  canDeactivate(): Observable<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LeavePageGuard implements CanDeactivate<CanDeactivateComponent> {
  constructor(public dialog: MatDialog) { }

  canDeactivate(component: CanDeactivateComponent): Observable<boolean> {
    if (component.canDeactivate()) {
      return of(true);
    }

    const dialogRef = this.dialog.open(ConfirmationModalComponent, getDialogConfig());
    return dialogRef.afterClosed().pipe(
      map(result => result === true)
    );
  }

}

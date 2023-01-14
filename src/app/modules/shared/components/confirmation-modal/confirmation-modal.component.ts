import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationModalComponent>, public router: Router) { }

  closeModal(): void {
    this.dialogRef.close(false);
  }

  leavePage(): void {
    this.dialogRef.close(true);
  }

}

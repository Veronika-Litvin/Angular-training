import { MatDialogConfig } from "@angular/material/dialog";

export function getDialogConfig() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "250px";
    dialogConfig.width = "450px";
    dialogConfig.position = {
        top: '10px',
    };
    return dialogConfig;
}
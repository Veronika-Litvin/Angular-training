import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { ErrorType } from '../models/error-enum';
import { MessageService } from '../services/message.service';

@Component({
    selector: 'app-field-errors',
    templateUrl: './field-errors.component.html',
    styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent {
    @Input() label!: string;

    // eslint-disable-next-line @angular-eslint/no-input-rename
    @Input('control') formControl!: FormControl | AbstractControl;

    error = ErrorType;

    constructor(private messageService: MessageService) { }

    msg(error: ErrorType, replacement: { replace: string, with: string }[] = []): string {
        let message = this.messageService.get(error);
        replacement.forEach(r => message = message.replace(r.replace, r.with));
        return message;
    }

    getError(err: ErrorType, key: string | null = null): void {
        return key ? this.formControl.getError(err)[key] : this.formControl.getError(err);
    }

    hasError(err: ErrorType): boolean {
        return this.formControl.hasError(err);
    }

    showErrors(): boolean {
        return this.formControl.touched && this.formControl.invalid;
    }

}
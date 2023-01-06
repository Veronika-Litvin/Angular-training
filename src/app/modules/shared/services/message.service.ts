import { Injectable } from '@angular/core';
import { messages } from '../mocks/messages';

@Injectable({ providedIn: 'root' })
export class MessageService {
    get(key: string): string {
        return messages[key] || key;
    }
}
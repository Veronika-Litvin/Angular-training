import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanDeactivateComponent {
  canDeactivate(): Observable<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LeavePageGuard implements CanDeactivate<CanDeactivateComponent> {
  canDeactivate(component: CanDeactivateComponent): boolean {
     return !component.canDeactivate()
     ? confirm("You have some unsaved changes and it will be lost. Do you want to leave the page?") 
     : true;
  }
  
}

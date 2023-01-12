import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserEditPageComponent } from '../../user/pages/user-edit-page/user-edit-page.component';

@Injectable({
  providedIn: 'root'
})
export class LeavePageGuard implements CanDeactivate<UserEditPageComponent> {
  canDeactivate(
    component: UserEditPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean> | boolean {
      return component.canDeactivate ? component.canDeactivate() : true;

  }
  
}

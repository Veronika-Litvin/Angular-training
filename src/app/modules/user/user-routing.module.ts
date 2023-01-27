import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../authorization/services/auth.guard";
import { LeavePageGuard } from "../shared/guards/leave-page.guard";
import { UserEditPageComponent } from "./pages/user-edit-page/user-edit-page.component";
import { UsersPageComponent } from "./pages/users-page/users-page.component";

const USERS_ROUTES: Routes = [
          {
          path: 'user',
          component: UsersPageComponent,
          canActivate: [AuthGuard],
          canActivateChild: [AuthGuard],
        },
        {
            path: 'edit-user/:id',
            component: UserEditPageComponent,
            canDeactivate: [LeavePageGuard],
          }
  ];
  
  @NgModule({
    declarations: [],                      
    imports: [RouterModule.forChild(USERS_ROUTES)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }
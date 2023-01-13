import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LeavePageGuard } from "../shared/guards/leave-page.guard";
import { UserResolver } from "../shared/guards/resolse.guard";
import { UserEditPageComponent } from "./pages/user-edit-page/user-edit-page.component";

const USERS_ROUTES: Routes = [
        {
            path: 'edit-user/:id',
            component: UserEditPageComponent,
            canDeactivate: [LeavePageGuard],
            resolve: {
              user: UserResolver
            }
          }
  ];
  
  @NgModule({
    declarations: [],                      
    imports: [RouterModule.forChild(USERS_ROUTES)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }
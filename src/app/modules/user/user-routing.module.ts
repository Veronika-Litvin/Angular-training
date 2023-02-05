import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LeavePageGuard } from "../core/guards/leave-page.guard";
import { CompanyInfoComponent } from "./components/company-info/company-info.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { PersonalInfoComponent } from "./components/personal-info/personal-info.component";
import { UserEditPageComponent } from "./pages/user-edit-page/user-edit-page.component";
import { UserInfoPageComponent } from "./pages/user-info-page/user-info-page.component";
import { UsersPageComponent } from "./pages/users-page/users-page.component";

const USERS_ROUTES: Routes = [
        {
            path: '',
            component: UsersPageComponent,
        },
        {
            path: 'edit-user/:id',
            component: UserEditPageComponent,
            canDeactivate: [LeavePageGuard],
        },
        {
          path: 'info/:id',
          component: UserInfoPageComponent,
          children: [
            { path: '', redirectTo: 'company-info', pathMatch: 'full' },
            { path: 'company-info', component: CompanyInfoComponent, data: { label: 'Company' } },
            { path: 'personal-info', component: PersonalInfoComponent, data: { label: 'Personal' } },
            { path: 'contacts', component: ContactsComponent, data: { label: 'Contacts' } }
          ]
      },
  
  ];
  
  @NgModule({
    declarations: [],                      
    imports: [RouterModule.forChild(USERS_ROUTES)],
    exports: [RouterModule]
  })
  export class UserRoutingModule { }
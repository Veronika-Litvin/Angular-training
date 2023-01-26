import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './modules/authorization/pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './modules/authorization/pages/sign-up-page/sign-up-page.component';
import { CarsPageComponent } from './modules/car/pages/cars-page/cars-page.component';
import { UserCreationPageComponent } from './modules/user/pages/user-creation-page/user-creation-page.component';
import { UsersPageComponent } from './modules/user/pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./modules/user/user-routing.module').then(m => m.UserRoutingModule)
  },
  {
    path: 'car',
    component: CarsPageComponent
  },
  {
    path: 'user',
    component: UsersPageComponent
  },
  {
    path: 'create-user',
    component: UserCreationPageComponent
  },
  {
    path: 'signin',
    component: SignInPageComponent
  },
  {
    path: 'signup',
    component: SignUpPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

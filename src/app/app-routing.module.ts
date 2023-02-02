import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './modules/authorization/pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './modules/authorization/pages/sign-up-page/sign-up-page.component';
import { AuthGuard } from './modules/authorization/services/auth.guard';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { UserCreationPageComponent } from './modules/user/pages/user-creation-page/user-creation-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user-routing.module').then(m => m.UserRoutingModule)
  },
  {
    path: 'car',
    loadChildren: () => import('./modules/car/car-routing.module').then(m => m.CarRoutingModule)
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
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [    
    AuthGuard   
  ],
})
export class AppRoutingModule { }

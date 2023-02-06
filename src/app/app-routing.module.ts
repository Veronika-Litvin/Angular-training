import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './modules/authorization/pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './modules/authorization/pages/sign-up-page/sign-up-page.component';
import { LoadGuard } from './modules/core/guards/load.guard';
import { AuthedUserWrapperComponent } from './modules/core/components/authed-user-wrapper/authed-user-wrapper.component';
import { NotAuthedUserWrapperComponent } from './modules/core/components/not-authed-user-wrapper/not-authed-user-wrapper.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { AuthGuard } from './modules/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: AuthedUserWrapperComponent,
    canActivate: [AuthGuard], 
    children: [
      { 
        path: 'home', 
        component: HomePageComponent 
      },
      {
        path: 'car', 
        canLoad: [LoadGuard],
        loadChildren: () => import('./modules/car/car.module').then(m => m.CarModule)
      },
      {
        path: 'user',
        canLoad: [LoadGuard],
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      },
      { 
        path: '', 
        redirectTo: 'signin', 
        pathMatch: 'full' 
      },
    ],
  },
    {
      path: '',
      component: NotAuthedUserWrapperComponent,
      children: [
        {
          path: 'signin',
          component: SignInPageComponent
        },
        {
          path: 'signup',
          component: SignUpPageComponent
        },
      ]
    },

  { 
    path: "**", 
    redirectTo: "home", 
    pathMatch: 'full' 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ],
})
export class AppRoutingModule { }

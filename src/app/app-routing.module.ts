import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsPageComponent } from './modules/car/pages/cars-page/cars-page.component';
import { UserCreationPageComponent } from './modules/user/pages/user-creation-page/user-creation-page.component';
import { UsersPageComponent } from './modules/user/pages/users-page/users-page.component';

const routes: Routes = [
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
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsPageComponent } from './modules/car/pages/cars-page/cars-page.component';
import { UserCreationPageComponent } from './modules/user/pages/user-creation-page/user-creation-page.component';
import { UsersPageComponent } from './modules/user/pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

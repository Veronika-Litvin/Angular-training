import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/components/car/car.component';
import { UserComponent } from './user/components/user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full'
  },
  {
    path: 'car',
    component: CarComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

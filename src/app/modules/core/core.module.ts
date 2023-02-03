import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/authed-header/authed-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AuthedUserWrapperComponent } from './components/authed-user-wrapper/authed-user-wrapper.component';
import { NotAuthedUserWrapperComponent } from './components/not-authed-user-wrapper/not-authed-user-wrapper.component';
import { RouterModule } from '@angular/router';
import { NotAuthedHeaderComponent } from './components/not-authed-header/not-authed-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    HeaderComponent,
    AuthedUserWrapperComponent,
    NotAuthedUserWrapperComponent,
    NotAuthedHeaderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }

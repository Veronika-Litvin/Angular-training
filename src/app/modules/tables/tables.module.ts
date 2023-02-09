import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesPageComponent } from './pages/tables-page/tables-page.component';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ServerTableComponent } from './components/server-table/server-table.component';


@NgModule({
  declarations: [
    TablesPageComponent,
    ClientTableComponent,
    ServerTableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class TablesModule { }

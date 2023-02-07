import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserApiService } from 'src/app/modules/user/services/user-api.service';
import { UserColumn } from '../../models/user-column.interface';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {

  displayedColumns: string[] = ['fullName', 'email', 'age', 'addresses', 'department'];
  dataSource = new MatTableDataSource<UserColumn>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userApiService: UserApiService) {}

  ngOnInit(): void {
    this.userApiService.getUsersTable()
    .subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
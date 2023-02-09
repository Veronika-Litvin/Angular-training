import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/modules/user/models/user.interface';
import { UserApiService } from 'src/app/modules/user/services/user-api.service';

@Component({
  selector: 'app-client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})
export class ClientTableComponent implements OnInit {

  displayedColumns: string[] = ['lastName', 'userEmail', 'age', 'addresses', 'department'];
  dataSource = new MatTableDataSource<IUser>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userApiService: UserApiService) {}

  ngOnInit(): void {
    this.userApiService.getUsers({})
    .subscribe((users: IUser[]) => {
      this.dataSource = new MatTableDataSource(users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
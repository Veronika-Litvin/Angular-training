import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UserApiService } from 'src/app/modules/user/services/user-api.service';
import { UserDataSource } from 'src/app/modules/user/services/user-data-source';

@Component({
  selector: 'app-server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.scss']
})
export class ServerTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['lastName', 'userEmail', 'age', 'addresses', 'department'];
  data!: UserDataSource;

  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userApiService: UserApiService) { }

  ngOnInit(): void {
    this.data = new UserDataSource(this.userApiService);
    this.data.loadUsers(1, 5);

  }

  ngAfterViewInit() {
    this.startPaginator();
    this.initSort();
  }

  startPaginator(): void {
    this.paginator.page.subscribe(() => {
      this.data.loadUsers(
        this.paginator.pageIndex + 1,
        this.paginator.pageSize
      );
    });
  }

  initSort(): void {
    this.sort.sortChange.subscribe(activeSort => {
      this.data.loadUsers(
        this.paginator.pageIndex + 1,
        this.paginator.pageSize,
        activeSort.active,
        activeSort.direction
      );
    });
  }

}

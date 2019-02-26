import { Component, OnInit, ViewChild } from '@angular/core';
import { BootcampPeriod } from '../bootcampPeriod';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-period-list',
  templateUrl: './period-list.component.html',
  styleUrls: ['./period-list.component.css']
})
export class PeriodListComponent implements OnInit {

  period: BootcampPeriod[] = [];
  list: MatTableDataSource<any>;
  displayedColumns: String[] = ['batchId', 'weekId', 'description', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private service: PeriodService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getPeriods().subscribe(res => {
      Object.assign(this.period, res['values']);
      console.log(this.period);
      this.list = new MatTableDataSource(this.period);
      this.list.sort = this.sort;
      this.list.paginator = this.paginator;
    }, err => {
      console.log(JSON.stringify(err));
    })
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.list.filter = this.searchKey.trim().toLowerCase();
  }

  onDelete(batchId) {
  }
}

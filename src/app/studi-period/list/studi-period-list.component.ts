import { Component, OnInit, ViewChild } from '@angular/core';
import { StudiPeriodService } from '../studi-period.service';
import { FormGroup } from '@angular/forms';
import { StudiPeriod } from '../studiPeriod';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ActiveFlag } from 'src/app/shared/enum';

@Component({
  selector: 'app-studi-period-list',
  templateUrl: './studi-period-list.component.html',
  styleUrls: ['./studi-period-list.component.css']
})
export class StudiPeriodListComponent implements OnInit {

  studiPeriod: StudiPeriod[] = [];
  list: MatTableDataSource<any>;
  displayedColumns: String[] = ['weekId', 'description', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: String;
  constructor(private service: StudiPeriodService) { }
  form: FormGroup;

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getStudiPeriods().subscribe(res => {
      Object.assign(this.studiPeriod, res['values']);
      this.list = new MatTableDataSource(this.studiPeriod);
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

  onDelete(weekId) {
    if (confirm("Are you sure you want to delete this data ? ")) {
      let studi: StudiPeriod = new StudiPeriod();
      studi.weekId = weekId;
      studi.activeFlag = ActiveFlag.Inactive;
      this.service.updateStudiPeriod(studi).subscribe(res => {
        location.reload();
      }, err => {
        alert("Delete Failed !!!");
      })
    }
  }

}

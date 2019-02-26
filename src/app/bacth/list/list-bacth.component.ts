import { Component, OnInit, ViewChild } from '@angular/core';
import { BacthService } from '../bacth.service';
import { BootcampBatch } from '../batch';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { CreateBatchComponent } from '../create/create-batch.component';
// import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-list-bacth',
  templateUrl: './list-bacth.component.html',
  styleUrls: ['./list-bacth.component.css']
})
export class ListBacthComponent implements OnInit {

  batch: BootcampBatch[] = [];
  list: MatTableDataSource<any>;
  displayedColumns: String[] = ['description', 'sequence', 'startDate', 'finishDate', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private service: BacthService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getBaths().subscribe(res => {
      Object.assign(this.batch, res['values']);
      console.log(this.batch);
      this.list = new MatTableDataSource(this.batch);
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

  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CreateBatchComponent, dialogConfig)
  }

  onDelete(batchId) {
    if (confirm('are you sure !!')) {
      this.service.deleteBatch(batchId).subscribe(res => {
        alert("success");
        location.reload();
      }, err => {
        alert("gagal");
      })
    }

  }

}

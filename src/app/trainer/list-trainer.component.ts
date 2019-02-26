import { Component, OnInit, ViewChild } from '@angular/core';
import { TrainerService } from './trainer.service';
import { Trainer } from './trainer';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ActiveFlag } from '../shared/enum';

@Component({
  selector: 'app-list-trainer',
  templateUrl: './list-trainer.component.html',
  styleUrls: ['./list-trainer.component.css']
})
export class ListTrainerComponent implements OnInit {

  trainer: Trainer[] = [];
  list: MatTableDataSource<any>;
  displayedColumns: String[] = ['trainerId', 'emailPhone', 'firstName', 'lastName', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string
  constructor(private service: TrainerService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.service.getTrainers().subscribe(res => {
      Object.assign(this.trainer, res['values']);
      this.list = new MatTableDataSource(this.trainer);
      this.list.sort = this.sort;
      this.list.paginator = this.paginator;
      // console.log(this.trainer);
    })
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.list.filter = this.searchKey.trim().toLowerCase();
  }

  onDelete(trainerId) {
    let trainer: Trainer = new Trainer();
    // alert(trainerId);
    // alert(ActiveFlag.Inactive);
    trainer.activeFlag = ActiveFlag.Inactive;
    trainer.trainerId = trainerId;
    this.service.updateTrainer(trainer).subscribe(res => {
      alert("Update Success...");
    }, err => {
      alert("Update failed !");
    })
  }

}

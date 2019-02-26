import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { BootcampBatch } from 'src/app/bacth/batch';
import { BacthService } from 'src/app/bacth/bacth.service';

@Component({
  selector: 'app-bootcamp-bacth',
  templateUrl: './bootcamp-bacth.component.html',
  styleUrls: ['./bootcamp-bacth.component.css']
})
export class BootcampBacthComponent implements OnInit {

  listBatch: BootcampBatch[] = [];
  @Output()
  batch = new EventEmitter<BootcampBatch>();

  @Input()
  selectedBatch: BootcampBatch;

  constructor(private service: BacthService) { }

  ngOnInit() {
    this.loadData();
  }

  onChange(index) {
    //console.log("selected : " + index ? JSON.stringify(index) : '');
    console.log(index);
    if (this.listBatch && this.listBatch.length > 0) {
      this.batch.emit(this.listBatch[index]);
    }
  }

  loadData() {
    this.service.getBaths().subscribe(res => {
      // console.log(JSON.stringify(res));
      Object.assign(this.listBatch, res['values']);
    }, err => {
      alert("Error : " + JSON.stringify(err));
    })

  }

}

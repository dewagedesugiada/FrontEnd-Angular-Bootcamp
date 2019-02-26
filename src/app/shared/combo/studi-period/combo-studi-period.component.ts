import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { StudiPeriod } from 'src/app/studi-period/studiPeriod';
import { StudiPeriodService } from 'src/app/studi-period/studi-period.service';

@Component({
  selector: 'app-combo-studi-period',
  templateUrl: './combo-studi-period.component.html',
  styleUrls: ['./combo-studi-period.component.css']
})
export class ComboStudiPeriodComponent implements OnInit {

  listStudi: StudiPeriod[] = [];
  @Output()
  batch = new EventEmitter<StudiPeriod>();

  @Input()
  selectedBatch: StudiPeriod;

  constructor(private service: StudiPeriodService) { }

  ngOnInit() {
    this.loadData();
    console.log(this.listStudi);
  }

  onChange(index) {
    //console.log("selected : " + index ? JSON.stringify(index) : '');
    console.log(index);
    if (this.listStudi && this.listStudi.length > 0) {
      this.batch.emit(this.listStudi[index]);
    }
  }

  loadData() {
    this.service.getStudiPeriods().subscribe(res => {
      console.log(JSON.stringify(res));
      Object.assign(this.listStudi, res['values']);
    }, err => {
      alert("Error : " + JSON.stringify(err));
    })

  }

}

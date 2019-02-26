import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeriodService } from '../period.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-period',
  templateUrl: './create-period.component.html',
  styleUrls: ['./create-period.component.css']
})
export class CreatePeriodComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: PeriodService, private router: Router) { }
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      batchId: [""],
      weekId: [""],
      description: [""]
    })

  }

}

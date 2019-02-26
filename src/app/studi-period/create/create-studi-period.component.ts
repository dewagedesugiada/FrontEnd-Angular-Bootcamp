import { Component, OnInit } from '@angular/core';
import { StudiPeriodService } from '../studi-period.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudiPeriod } from '../studiPeriod';

@Component({
  selector: 'app-create-studi-period',
  templateUrl: './create-studi-period.component.html',
  styleUrls: ['./create-studi-period.component.css']
})
export class CreateStudiPeriodComponent implements OnInit {

  constructor(private service: StudiPeriodService, private fb: FormBuilder, private router: Router) { }
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      weekId: ["", Validators.required],
      description: ["", Validators.required]
    });

  }

  submit() {
    let studi: StudiPeriod = new StudiPeriod();
    studi.weekId = this.form.controls["weekId"].value;
    studi.description = this.form.controls["description"].value;
    this.service.insertPeriod(studi).subscribe(res => {
      alert("Insert success...");
      this.router.navigate(['/list-studi-period']);

    }, err => {
      alert("Insert Failed !!!")
    })
  }

}

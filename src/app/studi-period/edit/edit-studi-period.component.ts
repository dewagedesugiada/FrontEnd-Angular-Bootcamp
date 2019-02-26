import { Component, OnInit } from '@angular/core';
import { StudiPeriodService } from '../studi-period.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudiPeriod } from '../studiPeriod';

@Component({
  selector: 'app-edit-studi-period',
  templateUrl: './edit-studi-period.component.html',
  styleUrls: ['./edit-studi-period.component.css']
})
export class EditStudiPeriodComponent implements OnInit {

  constructor(private service: StudiPeriodService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      weekId: [""],
      description: ["", Validators.required]
    });
    this.route.params.subscribe(params => {
      this.service.getStudiPeriodById(params['weekId']).subscribe(res => {
        this.form.controls["weekId"].setValue(res['values'].weekId);
        this.form.controls["description"].setValue(res['values'].description);
      })
    })
  }

  submit() {
    let studi: StudiPeriod = new StudiPeriod();
    studi.weekId = this.form.controls["weekId"].value;
    studi.description = this.form.controls["description"].value;

    this.service.updateStudiPeriod(studi).subscribe(res => {
      alert("Update Success...");
      this.router.navigate(["/list-studi-period"]);
    }, err => {
      alert("Update Failed !!!");
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BacthService } from '../bacth.service';
import { BootcampBatch } from '../batch';

@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit-batch.component.html',
  styleUrls: ['./edit-batch.component.css']
})
export class EditBatchComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private service: BacthService) { }
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      batchId: [''],
      description: ['', Validators.required],
      sequence: ['', Validators.required],
      startDate: ['', Validators.required],
      finishDate: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.service.getBatchById(params['batchId']).subscribe(res => {
        console.log("data" + res['values'].description);
        this.form.controls['batchId'].setValue(res['values'].batchId);
        this.form.controls['description'].setValue(res['values'].description);
        this.form.controls['sequence'].setValue(res['values'].sequence);
        this.form.controls['startDate'].setValue(res['values'].startDate);
        this.form.controls['finishDate'].setValue(res['values'].finishDate);
      })
    })

  }

  submit() {
    let batch: BootcampBatch = new BootcampBatch();
    batch.batchId = this.form.controls['batchId'].value;
    batch.description = this.form.controls['description'].value;
    batch.sequence = this.form.controls['sequence'].value;
    batch.startDate = this.form.controls['startDate'].value;
    batch.finishDate = this.form.controls['finishDate'].value;

    this.service.updateBatch(batch).subscribe(res => {
      alert("Upadate Success...");
      this.router.navigate(["/list-batch"]);
    }, err => {
      alert("Upadate Failed !");
    })
  }

  onClose() {
    this.router.navigate(['/list-batch']);
  }

}

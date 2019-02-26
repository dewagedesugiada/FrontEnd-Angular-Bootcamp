import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BacthService } from '../bacth.service';
import { Router } from '@angular/router';
import { BootcampBatch } from '../batch';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-batch',
  templateUrl: './create-batch.component.html',
  styleUrls: ['./create-batch.component.css']
})
export class CreateBatchComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: BacthService, private router: Router, private dialogRef: MatDialogRef<CreateBatchComponent>) { }
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      description: ['', Validators.required],
      sequence: ['', Validators.required],
      startDate: ['', Validators.required],
      finishDate: ['', Validators.required]
    });
  }

  submit() {
    let batch: BootcampBatch = new BootcampBatch();
    batch.description = this.form.controls['description'].value;
    batch.sequence = this.form.controls['sequence'].value;
    batch.startDate = this.form.controls['startDate'].value;
    batch.finishDate = this.form.controls['finishDate'].value;

    this.service.insertBacth(batch).subscribe(res => {
      // this.router.navigate(['/list-batch']);
      alert("Insert success...");
      this.onClose();
      location.reload();
    }, err => {
      alert("Insert Failed !");
      this.router.navigate(['/list-batch']);
    });

  }

  onClose() {
    // this.router.navigate(['/list-batch']);
    this.form.reset();
    this.dialogRef.close();
  }

  onCreate() {
    this.router.navigate(['/create-batch']);
  }

}

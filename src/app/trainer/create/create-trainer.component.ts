import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Trainer } from '../trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-create-trainer',
  templateUrl: './create-trainer.component.html',
  styleUrls: ['./create-trainer.component.css']
})
export class CreateTrainerComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private service: TrainerService) { }
  form: FormGroup;

  ngOnInit() {

    this.form = this.fb.group({
      trainerId: ['', Validators.required],
      emailPhone: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })

  }

  submit() {
    let trainer: Trainer = new Trainer();
    trainer.trainerId = this.form.controls['trainerId'].value;
    trainer.emailPhone = this.form.controls['emailPhone'].value;
    trainer.firstName = this.form.controls['firstName'].value;
    trainer.lastName = this.form.controls['lastName'].value;

    this.service.createTrainer(trainer).subscribe(res => {
      alert("Insert Success...");
      this.router.navigate(['/list-trainer']);
    }, err => {
      alert("Insert Failed !");
    })

  }

  onClose() {
    this.router.navigate(['/list-trainer']);
  }

}

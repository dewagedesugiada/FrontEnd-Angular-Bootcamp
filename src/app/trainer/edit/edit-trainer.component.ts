import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainerService } from '../trainer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-edit-trainer',
  templateUrl: './edit-trainer.component.html',
  styleUrls: ['./edit-trainer.component.css']
})
export class EditTrainerComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: TrainerService, private route: ActivatedRoute, private router: Router) { }
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      trainerId: ['', Validators.required],
      emailPhone: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.service.getTrainerById(params['trainerId']).subscribe(res => {
        console.log("data" + res['values'].description);
        this.form.controls['trainerId'].setValue(res['values'].trainerId);
        this.form.controls['emailPhone'].setValue(res['values'].emailPhone);
        this.form.controls['firstName'].setValue(res['values'].firstName);
        this.form.controls['lastName'].setValue(res['values'].lastName);
      })
    })
  }

  submit() {
    let trainer: Trainer = new Trainer();
    trainer.trainerId = this.form.controls['trainerId'].value;
    trainer.emailPhone = this.form.controls['emailPhone'].value;
    trainer.firstName = this.form.controls['firstName'].value;
    trainer.lastName = this.form.controls['lastName'].value;

    this.service.updateTrainer(trainer).subscribe(res => {
      alert("Update Success...");
      this.router.navigate(['/list-trainer']);
    }, err => {
      alert("Update failed !");
    })

  }
  onClose() {
    this.router.navigate(['/list-trainer']);
  }

}

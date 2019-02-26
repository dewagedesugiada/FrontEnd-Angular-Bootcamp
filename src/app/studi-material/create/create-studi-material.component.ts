import { Component, OnInit } from '@angular/core';
import { StudiMaterialService } from '../studi-material.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudiMaterial } from '../list/studMaterial';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-studi-material',
  templateUrl: './create-studi-material.component.html',
  styleUrls: ['./create-studi-material.component.css']
})
export class CreateStudiMaterialComponent implements OnInit {

  constructor(private service: StudiMaterialService, private fb: FormBuilder, private router: Router) { }
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      description: ["", Validators.required]
    })
  }

  submit() {
    let studiMaterial: StudiMaterial = new StudiMaterial();
    studiMaterial.description = this.form.controls["description"].value;
    this.service.insertMaterial(studiMaterial).subscribe(res => {
      alert("Insert Success...");
      this.router.navigate(["/list-studi-material"]);
    }, err => {
      alert("Insert Failed !");
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { StudiMaterialService } from '../studi-material.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudiMaterial } from '../list/studMaterial';

@Component({
  selector: 'app-edit-studi-material',
  templateUrl: './edit-studi-material.component.html',
  styleUrls: ['./edit-studi-material.component.css']
})
export class EditStudiMaterialComponent implements OnInit {

  constructor(private service: StudiMaterialService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      materialId: [""],
      description: ["", Validators.required]
    });
    this.route.params.subscribe(params => {
      this.service.getStudiMaterialById(params["materialId"]).subscribe(res => {
        this.form.controls["materialId"].setValue(res["values"].materialId);
        this.form.controls["description"].setValue(res["values"].description);
      })
    })
  }

  submit() {
    let studiMaterial: StudiMaterial = new StudiMaterial();
    studiMaterial.materialId = this.form.controls["materialId"].value;
    studiMaterial.description = this.form.controls["description"].value;
    this.service.updateStudiMaterial(studiMaterial).subscribe(res => {
      alert("Update Success...");
      this.router.navigate(["/list-studi-material"]);
    }, err => {
      alert("Update Failed !");
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudiMaterial } from './list/studMaterial';

@Injectable({
  providedIn: 'root'
})
export class StudiMaterialService {
  BaseUrl = "http://localhost:3030/"
  constructor(private http: HttpClient) { }

  getStudiMaterials() {
    const uri = this.BaseUrl + 'studyMaterials';
    return this.http.get(uri);
  }

  insertMaterial(studi: StudiMaterial) {
    const uri = this.BaseUrl + 'studyMaterial';
    return this.http.post(uri, studi);
  }

  getStudiMaterialById(materialId) {
    const uri = this.BaseUrl + 'studyMaterial/' + materialId;
    return this.http.get(uri);
  }

  updateStudiMaterial(studi: StudiMaterial) {
    const uri = this.BaseUrl + 'studyMaterial';
    return this.http.put(uri, studi);
  }
}

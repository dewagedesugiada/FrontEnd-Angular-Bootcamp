import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BootcampBatch } from './batch';

@Injectable({
  providedIn: 'root'
})
export class BacthService {

  BaseUrl = "http://localhost:3030/";
  constructor(private http: HttpClient) { }

  getBaths() {
    const uri = this.BaseUrl + 'bootcampBatchs';
    return this.http.get(uri);
  }

  insertBacth(bootcampBatch: BootcampBatch) {
    const uri = this.BaseUrl + 'bootcampBatch';
    return this.http.post(uri, bootcampBatch);

  }

  getBatchById(batchId) {
    const uri = this.BaseUrl + 'bootcampBatch/' + batchId;
    return this.http.get(uri);
  }

  deleteBatch(batchId) {
    const uri = this.BaseUrl + 'bootcampBatch/' + batchId;
    return this.http.delete(uri);
  }

  updateBatch(bootcampBatch: BootcampBatch) {
    const uri = this.BaseUrl + 'bootcampBatch';
    return this.http.put(uri, bootcampBatch);

  }

}

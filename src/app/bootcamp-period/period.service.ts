import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BootcampPeriod } from './bootcampPeriod';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {
  BaseUrl = "http://localhost:3030/"
  constructor(private http: HttpClient) { }

  getPeriods() {
    const uri = this.BaseUrl + 'bootcampPeriods';
    return this.http.get(uri);
  }

  createPeriod(period: BootcampPeriod) {
    const uri = this.BaseUrl + 'bootcampPeriod';
    return this.http.post(uri, period);
  }

  getPriodById(periodId) {
    const uri = this.BaseUrl + 'bootcampPeriod/' + periodId;
    return this.http.get(uri);
  }

  updateperiod(period: BootcampPeriod) {
    const uri = this.BaseUrl + 'bootcampPeriod';
    return this.http.put(uri, period);
  }
}

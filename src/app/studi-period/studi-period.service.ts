import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudiPeriod } from './studiPeriod';

@Injectable({
  providedIn: 'root'
})
export class StudiPeriodService {

  BaseUrl = "http://localhost:3030/"
  constructor(private http: HttpClient) { }

  getStudiPeriods() {
    const uri = this.BaseUrl + 'studyPeriods';
    return this.http.get(uri);
  }

  insertPeriod(studi: StudiPeriod) {
    const uri = this.BaseUrl + 'studyPeriod';
    return this.http.post(uri, studi);
  }

  getStudiPeriodById(weekId) {
    const uri = this.BaseUrl + 'studyPeriod/' + weekId;
    return this.http.get(uri);
  }

  updateStudiPeriod(studi: StudiPeriod) {
    const uri = this.BaseUrl + 'studyPeriod';
    return this.http.put(uri, studi);
  }

}

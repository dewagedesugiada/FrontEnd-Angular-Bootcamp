import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from './trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  BaseUrl = "http://localhost:3030/"
  constructor(private http: HttpClient) { }

  getTrainers() {
    const uri = this.BaseUrl + 'trainers';
    return this.http.get(uri);
  }

  createTrainer(trainer: Trainer) {
    const uri = this.BaseUrl + 'trainer';
    return this.http.post(uri, trainer);
  }

  getTrainerById(trainerId) {
    const uri = this.BaseUrl + 'trainer/' + trainerId;
    return this.http.get(uri);
  }

  updateTrainer(trainer: Trainer) {
    const uri = this.BaseUrl + 'trainer';
    return this.http.put(uri, trainer);
  }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class DashboardService {


  constructor(
    private http: HttpClient
  ) { }

  url = 'http://localhost:3000';

  userCount = new Observable((subscriber) => {
    subscriber.next(90);
  });

  subject = new Subject();

  behaviourSubject$ = new BehaviorSubject('Default value');

  summaryDetails = new BehaviorSubject<{trainCount: number, stationCount: number}>(
    {
      trainCount: 0,
      stationCount: 0
    });

  getData() {
    return 'This is returning from the Dashboard Service';
  }

  login(request) {
    return this.http.post(`${this.url}/login`, request);
  }

  getStations() {
    return this.http.post(`${this.url}/getStation`, {});
  }

  saveStation(req) {
    return this.http.post(`${this.url}/addStation`, req);
  }

  getTrains() {
    return this.http.post(`${this.url}/getTrain`, {});
  }

  saveTrain(req) {
    return this.http.post(`${this.url}/addTrain`, req);
  }

  getSummaryCount() {
    return this.http.get(`${this.url}/getSummary`);
  }

  deleteItem(endpoint: string, request) {
    return this.http.post(`${this.url}/${endpoint}`, request);
  }
}

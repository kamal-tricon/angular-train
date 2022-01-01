import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) { }

  showStations = false;
  showTrains = false;
  summaryCount = {
    trainCount: 0,
    stationCount: 0
  };

  ngOnInit(): void {
    this.dashboardService.behaviourSubject$.next('First new value');
    this.dashboardService.behaviourSubject$.subscribe((data) => {
      console.log(data);
    });
    this.dashboardService.userCount.subscribe((observer) => {
      // console.log(observer);
    });
    this.dashboardService.getSummaryCount().subscribe((data: any) => {
      this.dashboardService.summaryDetails.next(Object.assign({}, data));
    });

    this.dashboardService.summaryDetails.subscribe((data) => {
      // console.log(data);
      this.summaryCount = Object.assign({}, data);
    });
  }

  getStations() {
    // this.router.navigate(['dashboard/station']);
    this.showStations = true;
    this.showTrains = false;
  }

  getTrains() {
    // this.router.navigate(['dashboard/train']);
    this.showTrains = true;
    this.showStations = false;
  }
}

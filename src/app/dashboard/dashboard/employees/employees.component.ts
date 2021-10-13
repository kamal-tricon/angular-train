import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService
  ) { }

  inputString = '';

  ngOnInit(): void {
    this.inputString = this.dashboardService.getData();
  }

}

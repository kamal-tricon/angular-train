import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService
  ) { }

  inputString = '';

  ngOnInit(): void {
    this.inputString = this.dashboardService.getData();
  }

}

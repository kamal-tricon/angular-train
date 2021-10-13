import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from '../dashboard-routing/dashboard-routing.module';
import { CompanyComponent } from './company/company.component';
import { EmployeesComponent} from './employees/employees.component';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonAppModule } from '../../common/common.module';
import { StationComponent } from '../station/station.component';
import { TrainComponent } from '../train/train.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CompanyComponent,
    EmployeesComponent,
    StationComponent,
    TrainComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonAppModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }

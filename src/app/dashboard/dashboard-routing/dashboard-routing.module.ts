import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CompanyComponent } from '../dashboard/company/company.component';
import { EmployeesComponent } from '../dashboard/employees/employees.component';
import { StationComponent } from '../station/station.component';
import { TrainComponent } from '../train/train.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'company', component: CompanyComponent},
  { path: 'employees', component: EmployeesComponent},
  { path: 'station', component: StationComponent},
  { path: 'train', component: TrainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

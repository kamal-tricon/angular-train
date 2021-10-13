import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolComponent } from '../school/school.component';
import { TempleComponent } from '../temple/temple.component';
import { RouterModule, Routes } from '@angular/router';
import { ParentTestingComponent } from '../parent-testing/parent-testing.component';
import { TestingService } from '../testing.service';


const routes: Routes = [
  {
    path: '',
    component: ParentTestingComponent
  },
  {
    path: 'school',
    component: SchoolComponent
  },
  {
    path: 'temple',
    component: TempleComponent
  }
];

@NgModule({
  declarations: [
    ParentTestingComponent,
    SchoolComponent,
    TempleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TestingService
  ],
  exports: [
    RouterModule
  ]
})
export class TestingModule { }

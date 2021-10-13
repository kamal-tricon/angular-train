import { Component, OnInit } from '@angular/core';
import { TestingService } from '../testing.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss'],
  // providers: [TestingService]
})
export class SchoolComponent implements OnInit {

  constructor(private testingService: TestingService) {
    console.log(`Previous value is: ${this.testingService.getName()}`);
    this.testingService.setName('School Component');
    console.log(`New value is: ${this.testingService.getName()}`);
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { TestingService } from '../testing.service';

@Component({
  selector: 'app-temple',
  templateUrl: './temple.component.html',
  styleUrls: ['./temple.component.scss'],
  // providers: [TestingService]
})
export class TempleComponent implements OnInit {

  constructor(private testingService: TestingService) {
    console.log(`Previous value is: ${this.testingService.getName()}`);
    this.testingService.setName('Temple Component');
    console.log(`New value is: ${this.testingService.getName()}`);
  }

  ngOnInit(): void {
  }

}

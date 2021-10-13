import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-testing',
  templateUrl: './parent-testing.component.html',
  styleUrls: ['./parent-testing.component.scss'],
})
export class ParentTestingComponent implements OnInit {

  constructor() { }

  showTemple = true;

  ngOnInit(): void {
  }

  changeChild() {
    this.showTemple  = !this.showTemple;
  }

}

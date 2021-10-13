import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() tableBodyItems = [];
  @Input() headers = [];
  @Input() contents = [];
  @Output() eventEmitter = new EventEmitter();

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.tableBodyItems);
  }

  delete(item) {
    this.eventEmitter.emit(['delete', item]);
  }

}

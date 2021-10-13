import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-edit-popup',
  templateUrl: './add-edit-popup.component.html',
  styleUrls: ['./add-edit-popup.component.scss']
})
export class AddEditPopupComponent implements OnInit {

  constructor() { }

  @Input() inputList: [];
  @Input() popupHeading: string;
  @Output() emitterEvent = new EventEmitter();

  ngOnInit(): void {
  }

  showHidePopup(param1, param2, param3) {
    const emitter = {
      save: param1,
      cancel: param2,
      exit: param3,
      data: this.inputList
    };

    this.emitterEvent.emit(emitter);
  }

}

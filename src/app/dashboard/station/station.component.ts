import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
    private fb: FormBuilder,
  ) { }

  currentString = '';
  formGroup: FormGroup;
  openStationForm = false;
  stationList = [];
  showAddNewPopup = false;
  popupHeading = 'Add New Station';
  ISummaryCount: {trainCount: number, stationCount: number};
  inputList = [
    {
      heading: 'Station Name',
      value: '',
      type: 'text'
    },
    {
      heading: 'Station Code',
      value: '',
      type: 'text'
    },
    {
      heading: 'City',
      value: '',
      type: 'text'
    },
    {
      heading: 'State',
      value: '',
      type: 'text'
    }
  ];

  stationHeaders = ['Station Name', 'Station Code', 'City', 'State'];
  stationDisplayData = [];

  ngOnInit(): void {
    this.currentString = this.dashboardService.getData();
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.dashboardService.summaryDetails.subscribe((data) => {
      this.ISummaryCount = Object.assign({}, data);
    });

    this.getStations();
  }

  get username() { return this.formGroup.get('username'); }
  get password() { return this.formGroup.get('password'); }

  getStations() {
    this.dashboardService.getStations().subscribe((data: any) => {
      this.stationList = data;
      this.ISummaryCount.stationCount = this.stationList.length;
      this.dashboardService.summaryDetails.next(this.ISummaryCount);
      this.stationDisplayData = data.map((item) => {
        return [
          {key: 'stationName', value: item.stationName},
          {key: 'stationCode', value: item.stationCode},
          {key: 'city', value: item.city},
          {key: 'state', value: item.state},
        ];
      });
      this.openStationForm = true;
    });
  }

  addNewStation(event) {
    this.showAddNewPopup = event;
  }

  eventEmitter(event) {
    if (event[0] === 'delete') {
      this.dashboardService.deleteItem('deleteStation', {stationCode: event[1][1].value})
      .subscribe((data: any) => {
        this.getStations();
      }, (err) => {
        this.getStations();
      });
    }
  }

  onPopupAction(event) {
    this.showAddNewPopup = false;
    if (event.save) {
      const request = {
        stationName: event.data[0].value,
        stationCode: event.data[1].value,
        city: event.data[2].value,
        state: event.data[3].value,
      };
      this.dashboardService.saveStation(request).subscribe((data: any) => {
        this.getStations();
      }, (err) => {
        this.getStations();
      });
    }
  }

}

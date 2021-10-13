import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
  ) { }

  currentString = '';
  openTrainForm = false;
  trainList = [];
  showAddNewPopup = false;
  popupHeading = 'Add New Train';
  ISummaryCount: {trainCount: number, stationCount: number};
  inputList = [
    {
      heading: 'Train Name',
      value: '',
      type: 'text'
    },
    {
      heading: 'Train Number',
      value: '',
      type: 'text'
    }
  ];

  trainHeaders = ['Train Name', 'Train Number'];
  trainDisplayData = [];

  ngOnInit(): void {
    this.getTrains();
    this.dashboardService.summaryDetails.subscribe((data) => {
      this.ISummaryCount = Object.assign({}, data);
      console.log(data);
    });
  }

  getTrains() {
    this.dashboardService.getTrains().subscribe((data: any) => {
      this.trainList = data;
      this.ISummaryCount.trainCount = this.trainList.length;
      this.dashboardService.summaryDetails.next(this.ISummaryCount);
      this.trainDisplayData = data.map((item) => {
        return [
          {key: 'trainName', value: item.trainName},
          {key: 'trainNumber', value: item.trainNumber}
        ];
      });
      this.openTrainForm = true;
    });
  }

  eventEmitter(event) {
    if (event[0] === 'delete') {
      this.dashboardService.deleteItem('deleteTrain', {trainNumber: event[1][1].value})
      .subscribe((data: any) => {
        this.getTrains();
      }, (err) => {
        this.getTrains();
      });
    }
  }

  addNewTrain(event) {
    this.showAddNewPopup = event;
  }

  onPopupAction(event) {
    this.showAddNewPopup = false;
    if (event.save) {
      const request = {
        trainName: event.data[0].value,
        trainNumber: event.data[1].value
      };
      this.dashboardService.saveTrain(request).subscribe((data: any) => {
        this.getTrains();
      }, (err) => {
        this.getTrains();
      });
    }
  }

}

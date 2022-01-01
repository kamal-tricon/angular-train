import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {

  constructor(
    private service: LoginService
  ) { }

  tableData = [];
  searchText = '';
  list = [];

  ngOnInit(): void {
    this.getJsonData();
  }

  changeInput() {
    this.list = this.tableData.filter((record) => {
      return record.details.title
      .replace(/ /g, '').toLowerCase().indexOf(this.searchText.toLowerCase().trim()) > -1;
    });
  }

  getJsonData() {
    this.service.getTempData().subscribe((data: any) => {
      const products = data.products;
      this.tableData = [];
      Object.keys(products).forEach((key) => {
        this.tableData.push({
          productId: key,
          details: products[key]
        });
      });
      this.tableData.sort((item1, item2) => {
        return  item2.details.popularity - item1.details.popularity;
      });
      this.list = [...this.tableData];
    }, (err) => {
      // this.tableData = [
      //   {
      //     productId: '0',
      //     details: []
      //   }
      // ];
    });
  }

}

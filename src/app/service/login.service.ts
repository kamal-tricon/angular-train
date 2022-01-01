import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'http://localhost:3000';

  tempUrl = 'https://mindler-dashboard.s3.us-east-2.amazonaws.com/products.json';

  getData() {
    return 'This is returning from the Dashboard Service';
  }

  login(request) {
    return this.http.post(`${this.url}/login`, request);
  }

  getTempData() {
    return this.http.get(this.tempUrl);
  }
}

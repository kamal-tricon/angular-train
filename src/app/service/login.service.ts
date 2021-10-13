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

  getData() {
    return 'This is returning from the Dashboard Service';
  }

  login(request) {
    return this.http.post(`${this.url}/login`, request);
  }
}

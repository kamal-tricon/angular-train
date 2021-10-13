import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class TestingService {

  constructor() { }

  currentName: string;

  setName(name: string) {
    this.currentName = name;
  }

  getName() {
    return this.currentName;
  }
}

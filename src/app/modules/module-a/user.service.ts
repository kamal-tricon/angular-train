import { Injectable } from '@angular/core';
import { ModuleAModule } from '../module-a/module-a.module';

@Injectable({
  providedIn: ModuleAModule
})
export class UserService {

  constructor() { }

  getName() {
    return 'Returning from Module A';
  }
}

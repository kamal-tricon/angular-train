import { Injectable } from '@angular/core';
import { ModuleBModule } from '../module-b/module-b.module';

@Injectable({
  providedIn: ModuleBModule
})
export class UserService {

  constructor() { }

  getName() {
    return 'Returning from Module B';
  }
}

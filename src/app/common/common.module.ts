import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditPopupComponent } from './add-edit-popup/add-edit-popup.component';
import { FormsModule } from '@angular/forms';
import { CommonTableComponent } from './common-table/common-table.component';



@NgModule({
  declarations: [AddEditPopupComponent, CommonTableComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AddEditPopupComponent, CommonTableComponent]
})
export class CommonAppModule { }

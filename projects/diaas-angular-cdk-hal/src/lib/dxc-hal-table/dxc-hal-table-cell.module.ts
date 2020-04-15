import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcHalTableCellComponent } from './dxc-hal-table-cell.component';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DxcHalTableCellComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    PortalModule
  ],
  exports: [
    DxcHalTableCellComponent
  ]
})
export class DxcHalTableCellModule { }

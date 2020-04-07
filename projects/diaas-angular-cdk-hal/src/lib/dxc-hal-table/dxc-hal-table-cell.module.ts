import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcHalTableComponent } from './dxc-hal-table.component';
import { DxcPaginatorModule, DxcTableModule, DxcSpinnerModule } from '@diaas/dxc-ngx-cdk';
import { DxcHalTableCellComponent } from './dxc-hal-table-cell.component';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ComponentExampleComponent } from 'projects/cdk-hal-examples/src/app/components/component-example/component-example.component';

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
  ],
})
export class DxcHalTableCellModule { }

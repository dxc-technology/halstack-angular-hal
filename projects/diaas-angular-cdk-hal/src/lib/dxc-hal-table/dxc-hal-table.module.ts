import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcHalTableComponent, DxcCellDef, DxcRow, DataRowOutlet, DxcCellOutlet, CdkCell, CdkColumnDef, CdkRowDef } from './dxc-hal-table.component';
import { DxcPaginatorModule, DxcTableModule, DxcSpinnerModule } from '@diaas/dxc-ngx-cdk';
import { DxcHalTableCellModule } from './dxc-hal-table-cell.module';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ComponentExampleComponent } from 'projects/cdk-hal-examples/src/app/components/component-example/component-example.component';

@NgModule({
  declarations: [
    DxcHalTableComponent,
    DxcCellDef,
    DxcRow,
    DataRowOutlet,
    DxcCellOutlet,
    CdkCell,
    CdkColumnDef,
    CdkRowDef
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DxcTableModule,
    DxcPaginatorModule,
    DxcSpinnerModule,
    DxcHalTableCellModule
  ],
  exports: [
    DxcHalTableComponent,
    DxcCellDef,
    DxcRow,
    DataRowOutlet,
    DxcCellOutlet,
    CdkCell,
    CdkColumnDef,
    CdkRowDef
  ]
})
export class DxcHalTableModule { }

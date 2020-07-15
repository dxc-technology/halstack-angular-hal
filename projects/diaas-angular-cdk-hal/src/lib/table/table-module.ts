import { NgModule } from '@angular/core';
import { DxcCellOutlet } from './row';
import { DxcRowDef } from './row';
import { DxcTableModule, DxcSpinnerModule, DxcPaginatorModule } from '@diaas/dxc-ngx-cdk';
import { CommonModule } from '@angular/common';
import { DxcHeaderRowComponent } from './components/dxc-header-row/dxc-header-row.component';
import { DxcRowComponent } from './components/dxc-row/dxc-row.component';
import { DxcCellDef } from './directives/dxc-cell-def.directive';
import { DxcColumnDef } from './directives/dxc-column-def.directive';
import { TableSpinnerComponent } from './components/table-spinner/table-spinner.component';
import { FormsModule } from '@angular/forms';
import { DxcHalTable } from './table';
import {  HeaderOutlet }  from './table';
import { DataRowOutlet } from './table';
import { SpinnerOutlet } from './table';
import { Ordering } from './directives/sorting.directive';

@NgModule({
  exports: [
    DxcHalTable,
    DxcCellDef,
    DxcRowDef,
    DxcColumnDef,
    Ordering
  ],
  imports: [
    CommonModule,
    FormsModule,
    DxcSpinnerModule,
    DxcPaginatorModule,
    DxcTableModule
  ],
  declarations: [
    DxcHalTable,
    DxcRowDef,
    DxcCellDef,
    DxcCellOutlet,
    DxcColumnDef,
    Ordering,
    TableSpinnerComponent,
    DxcHeaderRowComponent,
    HeaderOutlet,
    DataRowOutlet,
    SpinnerOutlet,
    DxcRowComponent
  ],
  entryComponents: [
    DxcRowComponent,
    DxcHeaderRowComponent,
    TableSpinnerComponent
  ]})

export class DxcHalTableModule { }

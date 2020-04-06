import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcHalTableComponent } from './dxc-hal-table.component';
import { DxcPaginatorModule, DxcTableModule, DxcSpinnerModule } from '@diaas/dxc-ngx-cdk';

@NgModule({
  declarations: [
    DxcHalTableComponent
  ],
  imports: [
    CommonModule,
    DxcTableModule,
    DxcPaginatorModule,
    DxcSpinnerModule
  ],
  exports: [
    DxcHalTableComponent
  ]
})
export class DxcHalTableModule { }

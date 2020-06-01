import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HalTable } from './hal-table';
import { DxcTableModule } from '@diaas/dxc-ngx-cdk';
@NgModule({
  declarations: [
    HalTable
  ],
  exports: [
    HalTable
  ],
  imports: [
    CommonModule,
    DxcTableModule,

  ],
  entryComponents: [

  ],
  providers: []
})
export class HalTableModule { }

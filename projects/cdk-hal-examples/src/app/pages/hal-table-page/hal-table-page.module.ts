import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalTablePageComponent } from './hal-table-page.component';
import { DxcTagModule, DxcButtonModule, DxcTableModule, DxcPaginatorComponent, DxcPaginatorModule, DxcSpinnerComponent, DxcSpinnerModule } from '@diaas/dxc-ngx-cdk';
import { CdkTableModule } from '../../components/table/table-module';

@NgModule({
  declarations: [
    HalTablePageComponent
  ],
  imports: [
    CommonModule,
    CdkTableModule,
    DxcTableModule,
    DxcButtonModule,
    DxcTagModule,
    DxcSpinnerModule
  ],
  providers: [
  ],
  entryComponents: [
  ]  
})
export class HalTablePageModule { }

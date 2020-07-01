import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalTablePageComponent } from './hal-table-page.component';
import { DxcTagModule, DxcButtonModule, DxcTableModule, DxcSpinnerModule } from '@diaas/dxc-ngx-cdk';
import { CdkTableModule } from '@diaas/dxc-ngx-hal';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HalTablePageComponent  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
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

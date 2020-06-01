import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcButtonModule, DXCAlertModule, DxcSpinnerModule, DxcTableModule, DxcBoxModule, DxcPaginatorModule } from '@diaas/dxc-ngx-cdk';
import { HalResourceServiceFactoryProvider } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.factory-provider';
import { HrsCollectionPageComponent } from './hrs-collection-page.component';

@NgModule({
  declarations: [HrsCollectionPageComponent],
  imports: [
    DxcButtonModule,
    DXCAlertModule,
    DxcTableModule,
    DxcSpinnerModule,
    DxcBoxModule,
    DxcPaginatorModule,
    CommonModule
  ],
  exports: [HrsCollectionPageComponent]})
export class HrsCollectionPageModule { }

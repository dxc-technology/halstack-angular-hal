import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcButtonModule, DXCAlertModule, DxcSpinnerModule, DxcTableModule, DxcBoxModule } from '@diaas/dxc-ngx-cdk';
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
    CommonModule
  ],
  exports: [HrsCollectionPageComponent],
  providers: [HalResourceServiceFactoryProvider.createInstance(
    'CollectionProspectService',
    'https://localhost:3000/data',
    {})]  
})
export class HrsCollectionPageModule { }

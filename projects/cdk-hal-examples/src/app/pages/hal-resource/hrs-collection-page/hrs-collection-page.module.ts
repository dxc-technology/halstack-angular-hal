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
  exports: [HrsCollectionPageComponent],
  providers: [HalResourceServiceFactoryProvider.createInstance(
    'CollectionProspectService',
    'https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects',
    {"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"})]  
})
export class HrsCollectionPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalTablePageComponent } from './hal-table-page.component';
import {  HalResourceServiceFactoryProvider } from 'projects/diaas-angular-cdk-hal/src/projects';
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
    DxcPaginatorModule,
    DxcTagModule,
    DxcSpinnerModule
  ],
  providers: [
    HalResourceServiceFactoryProvider.createInstance(
    // 'CollectionUserService',
    // 'https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users',
    // {})
    'collectionProspectService',
    'https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects',
    {"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"})
  ],
  entryComponents: [
  ]  
})
export class HalTablePageModule { }

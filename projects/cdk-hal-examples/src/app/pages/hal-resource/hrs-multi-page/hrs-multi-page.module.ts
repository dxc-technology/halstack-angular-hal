import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DXCInputTextModule, DxcButtonModule, DxcSpinnerModule, DXCAlertModule } from '@dxc-technology/halstack-angular';
import { HrsMultiPageComponent } from './hrs-multi-page.component';
import { HalResourceServiceFactoryProvider } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.factory-provider';



@NgModule({
  declarations: [HrsMultiPageComponent],
  imports: [
    HttpClientModule,
    DXCInputTextModule,
    DxcButtonModule,
    DXCAlertModule,
    DxcSpinnerModule,
    CommonModule
  ],
  exports: [HrsMultiPageComponent],
  providers: [HalResourceServiceFactoryProvider.createInstance(
      'PropectService',
      'http://localhost:3000/data',
      {}),
    HalResourceServiceFactoryProvider.createInstance(
      'TelephonePropectService',
      'http://localhost:3000/data',
      {})]
})
export class HrsMultiPageModule { }

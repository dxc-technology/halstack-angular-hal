import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DXCInputTextModule, DxcButtonModule, DxcSpinnerModule, DXCAlertModule } from '@diaas/dxc-ngx-cdk';
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
      'https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5',
      {"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"}),
    HalResourceServiceFactoryProvider.createInstance(
      'TelephonePropectService',
      'https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/telephones/1',
      {"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"})]
})
export class HrsMultiPageModule { }

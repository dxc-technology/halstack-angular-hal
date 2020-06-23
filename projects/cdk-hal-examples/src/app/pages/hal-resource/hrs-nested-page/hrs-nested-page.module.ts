import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrsNestedPageComponent } from './hrs-nested-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DXCInputTextModule, DxcButtonModule, DxcSpinnerModule, DXCAlertModule } from '@diaas/dxc-ngx-cdk';
import { HalResourceServiceFactoryProvider } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.factory-provider';
import { HalResourceService } from '../../../../../../diaas-angular-cdk-hal/src/lib/table/services/diaas-angular-cdk-hal.service';



@NgModule({
  declarations: [HrsNestedPageComponent],
  imports: [
    HttpClientModule,
    DXCInputTextModule,
    DxcButtonModule,
    DXCAlertModule,
    DxcSpinnerModule,
    CommonModule
  ],
  exports: [HrsNestedPageComponent],
  providers: [
    HalResourceServiceFactoryProvider.createInstance(
        HalResourceService,
        'https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5',
        {"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"})
]
})
export class HrsNestedPageModule { }

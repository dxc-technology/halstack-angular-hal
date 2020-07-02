import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrsNestedPageComponent } from './hrs-nested-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DXCInputTextModule, DxcButtonModule, DxcSpinnerModule, DXCAlertModule } from '@diaas/dxc-ngx-cdk';
import { HalResourceServiceFactoryProvider } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.factory-provider';
import { HalResourceService } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.service';



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
        'http://localhost:3000/data',
        {})
]
})
export class HrsNestedPageModule { }

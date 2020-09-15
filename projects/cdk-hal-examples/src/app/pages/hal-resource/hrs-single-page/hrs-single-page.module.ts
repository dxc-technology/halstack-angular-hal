import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DXCInputTextModule, DxcButtonModule, DxcSpinnerComponent, DxcSpinnerModule, DxcAlertComponent, DXCAlertModule } from '@dxc-technology/halstack-angular';
import { HrsSinglePageComponent } from './hrs-single-page.component';
import { HalResourceServiceFactoryProvider } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.factory-provider';
import { HalResourceService } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.service';

@NgModule({
  declarations: [
    HrsSinglePageComponent
  ],
  imports: [
    HttpClientModule,
    DXCInputTextModule,
    DxcButtonModule,
    DxcSpinnerModule,
    DXCAlertModule,
    CommonModule
  ],
  exports: [HrsSinglePageComponent],
  providers: [
    HalResourceServiceFactoryProvider.createInstance(
        HalResourceService,
        'http://localhost:3000/data',
        {})
]

})
export class HrsSinglePageModule { }

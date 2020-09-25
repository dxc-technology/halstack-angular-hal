import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DxcInputTextModule, DxcButtonModule, DxcSpinnerComponent, DxcSpinnerModule, DxcAlertComponent, DxcAlertModule } from '@dxc-technology/halstack-angular';
import { HrsSinglePageComponent } from './hrs-single-page.component';
import { HalResourceServiceFactoryProvider } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.factory-provider';
import { HalResourceService } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.service';

@NgModule({
  declarations: [
    HrsSinglePageComponent
  ],
  imports: [
    HttpClientModule,
    DxcInputTextModule,
    DxcButtonModule,
    DxcSpinnerModule,
    DxcAlertModule,
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

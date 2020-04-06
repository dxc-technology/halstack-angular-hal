import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalTablePageComponent } from './hal-table-page.component';
import { DxcHalTableModule, HalResourceServiceFactoryProvider } from 'projects/diaas-angular-cdk-hal/src/projects';

@NgModule({
  declarations: [
    HalTablePageComponent
  ],
  imports: [
    CommonModule,
    DxcHalTableModule
  ],
  providers: [
    HalResourceServiceFactoryProvider.createInstance(
    'CollectionProspectService',
    'https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects',
    {"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"})
  ]  
})
export class HalTablePageModule { }

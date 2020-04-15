import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalTablePageComponent } from './hal-table-page.component';
import { DxcHalTableModule, HalResourceServiceFactoryProvider } from 'projects/diaas-angular-cdk-hal/src/projects';
import { ComponentExampleComponent } from '../../components/component-example/component-example.component';
import { DxcTagModule } from '@diaas/dxc-ngx-cdk';

@NgModule({
  declarations: [
    HalTablePageComponent,
    ComponentExampleComponent
  ],
  imports: [
    CommonModule,
    DxcHalTableModule,
    DxcTagModule
  ],
  providers: [
    HalResourceServiceFactoryProvider.createInstance(
    // 'CollectionUserService',
    // 'https://bgqrqjl2t2.execute-api.us-west-1.amazonaws.com/dev/realms/us-east-1_wCPANetpN/users',
    // {})
    'CollectionProspectService',
    'https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects',
    {"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"})
  ],
  entryComponents: [
    ComponentExampleComponent
  ]  
})
export class HalTablePageModule { }

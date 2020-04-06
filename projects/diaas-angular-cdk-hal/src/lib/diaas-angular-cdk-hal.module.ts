import { NgModule } from '@angular/core';
import { DiaasAngularCdkHalComponent } from './diaas-angular-cdk-hal.component';
import { DxcHalTableModule } from './dxc-hal-table/dxc-hal-table.module';

@NgModule({
  declarations: [DiaasAngularCdkHalComponent],
  imports: [
    DxcHalTableModule
  ],
  exports: [DiaasAngularCdkHalComponent]
})
export class DiaasAngularCdkHalModule { }

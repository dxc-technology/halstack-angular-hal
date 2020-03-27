import { NgModule } from '@angular/core';
import { DiaasAngularCdkHalComponent } from './diaas-angular-cdk-hal.component';
import { DiaasHalPaginatorComponent } from './diaas-hal-paginator/diaas-hal-paginator.component';



@NgModule({
  declarations: [DiaasAngularCdkHalComponent, DiaasHalPaginatorComponent],
  imports: [
  ],
  exports: [DiaasAngularCdkHalComponent]
})
export class DiaasAngularCdkHalModule { }

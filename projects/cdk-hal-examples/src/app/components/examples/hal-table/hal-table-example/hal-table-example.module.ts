import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HalTableExample } from "./hal-table-example.component";
import { DxcHalTableModule } from "@diaas/dxc-ngx-hal";
import { HttpClientModule } from "@angular/common/http";
import { ExampleViewerModule } from "../../../example-viewer/example-viewer.module";
import { HalTableSimple } from "../hal-table-simple/hal-table-simple.component";
import { DxcButtonModule, DxcTagModule, DxcSpinnerModule } from '@diaas/dxc-ngx-cdk';

@NgModule({
  declarations: [HalTableExample, HalTableSimple],
  imports: [
    HttpClientModule,
    CommonModule,
    DxcHalTableModule,
    ExampleViewerModule,
    DxcButtonModule,
    DxcTagModule,
    DxcSpinnerModule,
  ],
  exports: [HalTableExample],
})
export class HalTableExampleModule {}

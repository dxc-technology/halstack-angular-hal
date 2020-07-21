import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HalTablePageComponent } from "./hal-table-page.component";
import {
  DxcTagModule,
  DxcButtonModule,
  DxcTableModule,
  DxcSpinnerModule,
  DxcLinkModule,
} from "@diaas/dxc-ngx-cdk";
import { DxcHalTableModule } from "@diaas/dxc-ngx-hal";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HalTableExampleModule } from "../../components/examples/hal-table/hal-table-example/hal-table-example.module";
import { ExampleViewerModule } from "../../components/example-viewer/example-viewer.module";
import { TabbedSectionModule } from "../../components/tabbed-section/tabbed-section.module";
import { HalTablePropertiesComponent } from '../../components/examples/hal-table/hal-table-properties/hal-table-properties.component';

@NgModule({
  declarations: [HalTablePageComponent, HalTablePropertiesComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DxcTableModule,
    DxcHalTableModule,
    DxcLinkModule,
    HalTableExampleModule,
    ExampleViewerModule,
    TabbedSectionModule
  ],
  exports: [HalTablePageComponent, HalTablePropertiesComponent]
})
export class HalTablePageModule {}

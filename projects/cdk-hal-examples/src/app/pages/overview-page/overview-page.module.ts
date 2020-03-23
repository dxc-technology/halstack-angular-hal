import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DxcBoxModule, DxcBoxComponent, DxcTagModule, DxcTagComponent } from "@diaas/dxc-ngx-cdk"
import { BrowserModule } from '@angular/platform-browser';
import { OverviewPageComponent} from "./overview-page.component"
import { RouterModule } from '@angular/router';
import { MatIconModule, MatTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OverviewPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    DxcBoxModule,
    DxcTagModule,
    RouterModule,
    MatIconModule,
    MatTabsModule,
    FormsModule
  ],
  exports: [
  ],
  entryComponents: [
    DxcBoxComponent,
    DxcTagComponent,
  ]
})
export class OverviewPageModule {}

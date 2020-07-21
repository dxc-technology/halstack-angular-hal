import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsPageComponent } from './components-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DxcSideNavModule, DxcTableModule } from '@diaas/dxc-ngx-cdk';
import { HalTableExample } from '../../components/examples/hal-table/hal-table-example/hal-table-example.component';

@NgModule({
  declarations: [ComponentsPageComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    DxcSideNavModule,
    DxcTableModule
  ],
  exports: [ComponentsPageComponent]
})
export class ComponentsPageModule { }

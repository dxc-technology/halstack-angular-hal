import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsPageComponent } from './components-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DxcSideNavModule, DxcTableModule } from '@dxc-technology/halstack-angular';

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

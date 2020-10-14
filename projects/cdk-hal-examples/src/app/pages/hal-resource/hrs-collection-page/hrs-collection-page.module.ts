import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcButtonModule, DxcAlertModule, DxcSpinnerModule, DxcTableModule, DxcBoxModule, DxcPaginatorModule } from '@dxc-technology/halstack-angular';
import { HrsCollectionPageComponent } from './hrs-collection-page.component';
import { DxcAutocompleteHalModule } from '@dxc-technology/halstack-angular-hal';

@NgModule({
  declarations: [HrsCollectionPageComponent],
  imports: [
    DxcButtonModule,
    DxcAutocompleteHalModule,
    DxcAlertModule,
    DxcTableModule,
    DxcSpinnerModule,
    DxcBoxModule,
    DxcPaginatorModule,
    CommonModule
  ],
  exports: [HrsCollectionPageComponent]})
export class HrsCollectionPageModule { }

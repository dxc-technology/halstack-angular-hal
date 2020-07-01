import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
   MatInputModule, MatAutocompleteModule
} from "@angular/material";
import { DxcAutocompleteHalComponent } from './dxc-autocomplete-hal.component';
import { DXCInputTextModule } from '@diaas/dxc-ngx-cdk';


@NgModule({
  declarations: [DxcAutocompleteHalComponent],
  imports: [
    CommonModule,
    FormsModule,
    DXCInputTextModule
  ],
  exports: [DxcAutocompleteHalComponent]
})
export class DxcAutocompleteHalModule { }

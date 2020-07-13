import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
   MatInputModule, MatAutocompleteModule
} from "@angular/material";
import { DxcAutocompleteHalComponent } from './dxc-autocomplete-hal.component';
import { DXCInputTextModule } from '@diaas/dxc-ngx-cdk';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DxcAutocompleteHalComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DXCInputTextModule
  ],
  exports: [DxcAutocompleteHalComponent]
})
export class DxcAutocompleteHalModule { }

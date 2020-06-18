import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
   MatInputModule, MatAutocompleteModule
} from "@angular/material";
import {MatFormFieldModule} from '@angular/material/form-field';
import { DxcAutocompleteHalComponent } from './dxc-autocomplete-hal.component';
import { DXCInputTextModule } from '@diaas/dxc-ngx-cdk';


@NgModule({
  declarations: [DxcAutocompleteHalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
    DXCInputTextModule
  ],
  exports: [DxcAutocompleteHalComponent]
})
export class DxcAutocompleteHalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
   MatInputModule, MatAutocompleteModule
} from "@angular/material";
import {MatFormFieldModule} from '@angular/material/form-field';
import { DxcAutocompleteHalComponent } from './dxc-autocomplete-hal.component';


@NgModule({
  declarations: [DxcAutocompleteHalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule
  ],
  exports: [DxcAutocompleteHalComponent]
})
export class DxcAutocompleteHalModule { }

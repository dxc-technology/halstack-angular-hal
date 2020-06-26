import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteHalComponent } from './autocomplete-hal.component';
import { DxcAutocompleteHalModule } from '@diaas/dxc-ngx-hal';



@NgModule({
  declarations: [AutocompleteHalComponent],
  imports: [
    CommonModule,
    DxcAutocompleteHalModule
  ],
  exports: [AutocompleteHalComponent]
})
export class AutocompleteHalModule { }

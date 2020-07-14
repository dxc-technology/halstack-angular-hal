import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteHalComponent } from './autocomplete-hal.component';
import { DxcAutocompleteHalModule } from '@diaas/dxc-ngx-hal';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AutocompleteHalComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    DxcAutocompleteHalModule
  ],
  exports: [AutocompleteHalComponent]
})
export class AutocompleteHalModule { }

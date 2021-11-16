import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteHalComponent } from './hal-autocomplete-page.component';
import { DxcAutocompleteHalModule } from '@dxc-technology/halstack-angular-hal';
import { HttpClientModule } from '@angular/common/http';
import { AutocompleteHalExampleModule } from '../../components/examples/hal-autocomplete/hal-autocomplete-example/hal-autocomplete-example.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { HalAutocompletePropertiesComponent } from '../../components/examples/hal-autocomplete/hal-autocomplete-properties/hal-autocomplete-properties.component';
import { DxcTableModule, DxcLinkModule, DxcHeadingModule } from '@dxc-technology/halstack-angular';


@NgModule({
  declarations: [AutocompleteHalComponent, HalAutocompletePropertiesComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    DxcAutocompleteHalModule,
    AutocompleteHalExampleModule,
    ExampleViewerModule,
    TabbedSectionModule,
    DxcTableModule,
    DxcLinkModule,
    DxcHeadingModule
  ],
  exports: [AutocompleteHalComponent, HalAutocompletePropertiesComponent]
})
export class AutocompleteHalModule { }

import { NgModule } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";
import { DynamicComponentComponent } from "./dynamic-component.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AutocompleteHalExample } from '../examples/hal-autocomplete/hal-autocomplete-example/hal-autocomplete-example.component';
import { AutocompleteHalSimple } from '../examples/hal-autocomplete/hal-autocomplete-simple/hal-autocomplete-simple.component';
import { HalTableExample } from '../examples/hal-table/hal-table-example/hal-table-example.component';
import { HalTableSimple } from '../examples/hal-table/hal-table-simple/hal-table-simple.component';
import { HalAutocompletePropertiesComponent } from '../examples/hal-autocomplete/hal-autocomplete-properties/hal-autocomplete-properties.component';
import { HalTablePropertiesComponent } from '../examples/hal-table/hal-table-properties/hal-table-properties.component';

@NgModule({
  declarations: [DynamicComponentComponent],
  imports: [BrowserModule, FormsModule, PortalModule],
  exports: [DynamicComponentComponent],
  entryComponents: [
    AutocompleteHalExample,
    AutocompleteHalSimple,
    HalAutocompletePropertiesComponent,
    HalTableExample,
    HalTableSimple,
    HalTablePropertiesComponent
  ]
})
export class DynamicModule {}

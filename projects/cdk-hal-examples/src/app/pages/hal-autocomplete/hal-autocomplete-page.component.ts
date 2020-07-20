import { Component, OnInit, Inject } from '@angular/core';
import { Section } from '../../model/sections';
import { AutocompleteHalExample } from '../../components/examples/hal-autocomplete/hal-autocomplete-example/hal-autocomplete-example.component';
import { HalAutocompletePropertiesComponent } from '../../components/examples/hal-autocomplete/hal-autocomplete-properties/hal-autocomplete-properties.component';

@Component({
  selector: 'app-hal-autocomplete',
  templateUrl: './hal-autocomplete-page.component.html',
  styleUrls: ['./hal-autocomplete-page.component.scss']
})
export class AutocompleteHalComponent implements OnInit {

  sections: Array<Section>;

  constructor(){
    this.sections = new Array<Section>();
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'app-hal-autocomplete-properties', component: HalAutocompletePropertiesComponent},
      {id:1, label: 'EXAMPLES', selector: 'app-hal-autocomplete-example', component: AutocompleteHalExample}
    );
  }

}

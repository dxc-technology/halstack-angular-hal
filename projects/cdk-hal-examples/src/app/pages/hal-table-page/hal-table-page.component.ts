import { Component, OnInit, Inject } from '@angular/core';
import { Section } from '../../model/sections';
import { HalTableExample } from '../../components/examples/hal-table/hal-table-example/hal-table-example.component';
import { HalTablePropertiesComponent } from '../../components/examples/hal-table/hal-table-properties/hal-table-properties.component';

@Component({
  selector: 'app-hal-table',
  templateUrl: './hal-table-page.component.html',
  styleUrls: ['./hal-table-page.component.scss']
})
export class HalTablePageComponent implements OnInit {

  sections: Array<Section>;

  constructor(){
    this.sections = new Array<Section>();
  }

   ngOnInit() { 
    this.sections.push( 
      {id:0, label: 'PROPERTIES',selector: 'app-hal-table-properties', component: HalTablePropertiesComponent},
      {id:1, label: 'EXAMPLES', selector: 'app-hal-table-example', component: HalTableExample}
    );
  }

}

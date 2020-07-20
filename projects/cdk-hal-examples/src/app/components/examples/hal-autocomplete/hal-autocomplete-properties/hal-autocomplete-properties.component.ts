import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from '../../../../model/data-properties-table';

@Component({
  selector: 'app-hal-autocomplete-properties',
  templateUrl: './hal-autocomplete-properties.component.html',
  styleUrls: ['./hal-autocomplete-properties.component.scss']
})
export class HalAutocompletePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

}

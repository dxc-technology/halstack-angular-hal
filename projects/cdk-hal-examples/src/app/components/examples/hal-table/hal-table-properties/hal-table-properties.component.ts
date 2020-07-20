import { Component, OnInit, Input } from '@angular/core';
import { DataPropertiesTable } from '../../../../model/data-properties-table';

@Component({
  selector: 'app-hal-table-properties',
  templateUrl: './hal-table-properties.component.html',
  styleUrls: ['./hal-table-properties.component.scss']
})
export class HalTablePropertiesComponent implements OnInit {

  @Input()
  tablePropertiesExample: Array<DataPropertiesTable>;

  constructor() { 
    this.tablePropertiesExample = new Array<DataPropertiesTable>();
  }

  ngOnInit(): void {
        
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { HalResourceService } from 'projects/diaas-angular-cdk-hal/src/projects';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

@Component({
  selector: 'app-hal-table-page',
  templateUrl: './hal-table-page.component.html',
  styleUrls: ['./hal-table-page.component.scss']
})
export class HalTablePageComponent implements OnInit {

  columns: Array<any>;
  itemsPerPage : number = 10;

  columnFunction = `console.log(
                      item.summary[column.property]
                    );`;
  
  constructor(@Inject('CollectionProspectService') private collectionProspectService: HalResourceService) { 
  
  }

  ngOnInit() {
    this.columns = 
    [
      {
        header: "Title",
        property: "prospect-title",
        onClickItemFunction: "console.log('awesome');"
      },
      {
        header: "Given Name",
        property: "prospect-given-name"
      },
      {
        header: "Last Name",
        property: "prospect-last-name",
        onClickItemFunction: this.columnFunction
      },
      {
        header: "Email",
        property: "prospect-email"
      }
    ]
  }

  getCollectionProspectService(){
    return this.collectionProspectService;
  }

}

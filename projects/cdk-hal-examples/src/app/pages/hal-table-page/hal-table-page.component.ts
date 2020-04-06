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

  constructor(@Inject('CollectionProspectService') private collectionProspectService: HalResourceService) { 
  
  }

  ngOnInit() {
    this.columns = 
    [
      {
        header: "Title",
        property: "prospect-title"
      },
      {
        header: "Given Name",
        property: "prospect-given-name"
      },
      {
        header: "Last Name",
        property: "prospect-last-name"
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

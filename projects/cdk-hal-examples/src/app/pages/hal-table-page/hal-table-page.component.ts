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

  constructor(@Inject('CollectionProspectService') private collectionProspectService: HalResourceService) { 
  
  }

  ngOnInit() {
    this.columns = [];
  }

  getCollectionProspectService(){
    return this.collectionProspectService;
  }


}

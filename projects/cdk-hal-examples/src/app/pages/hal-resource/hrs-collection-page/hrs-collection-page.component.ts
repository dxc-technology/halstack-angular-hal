import { Component, OnInit, Inject } from '@angular/core';
import { HalResourceService } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.service';

@Component({
  selector: 'app-hrs-collection-page',
  templateUrl: './hrs-collection-page.component.html',
  styleUrls: ['./hrs-collection-page.component.scss']
})
export class HrsCollectionPageComponent implements OnInit {

  fetchStatus = this.collectionPropectService.fetchStatus;
  resource = this.collectionPropectService.resource;
  error = this.collectionPropectService.errorMessage;
  items = this.collectionPropectService.items;

  constructor(@Inject('CollectionProspectService') private collectionPropectService: HalResourceService) { 
    this.collectionPropectService.fetchResource();
  }

  ngOnInit() {

  }

  navigate(operation:string){
    this.collectionPropectService.executeItemsHandler(operation);
  }

  getItemPropertyValue(item, propertyKey){
    return item !== undefined && item !== null && item.summary!== null && item.summary && item.summary[propertyKey] !== null && item.summary[propertyKey] !== undefined ? 
      item.summary[propertyKey]: '';
  }



}

import { Component, OnInit, Inject } from '@angular/core';
import { HalResourceService } from '../../services/diaas-angular-cdk-hal.service';
import { HalResourceServiceFactoryProvider } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.factory-provider';

@Component({
  selector: 'app-hrs-collection-page',
  templateUrl: './hrs-collection-page.component.html',
  styleUrls: ['./hrs-collection-page.component.scss'],
  providers: [HalResourceServiceFactoryProvider.createInstance(
    'CollectionProspectService',
    'https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/telephones/1',
    {"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"})]
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

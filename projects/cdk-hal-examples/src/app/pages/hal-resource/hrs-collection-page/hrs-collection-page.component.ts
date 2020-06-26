import { Component, OnInit, Inject } from "@angular/core";
import { HalResourceService } from "@diaas/dxc-ngx-hal";

@Component({
  selector: "app-hrs-collection-page",
  templateUrl: "./hrs-collection-page.component.html",
  styleUrls: ["./hrs-collection-page.component.scss"],
  providers: [HalResourceService]
})
export class HrsCollectionPageComponent implements OnInit {

  fetchStatus = this.collectionPropectService.fetchStatus;
  resource = this.collectionPropectService.resource;
  error = this.collectionPropectService.errorMessage;
  items = this.collectionPropectService.items;

  page : number = 1;
  totalItems : number = 27;
  itemsPerPage : number =10;
  
  constructor(@Inject('CollectionProspectService') private collectionPropectService: HalResourceService) { 
    this.collectionPropectService.fetchResource();
  }

  ngOnInit() {}

  navigate(page: number, operation:string){
    this.collectionPropectService.executeItemsHandler(operation);
  }

  getItemPropertyValue(item, propertyKey) {
    return item !== undefined &&
      item !== null &&
      item.summary !== null &&
      item.summary &&
      item.summary[propertyKey] !== null &&
      item.summary[propertyKey] !== undefined
      ? item.summary[propertyKey]
      : "";
  }
}

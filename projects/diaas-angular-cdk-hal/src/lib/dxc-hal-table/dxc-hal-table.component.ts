import { Component, OnInit, Inject, Input } from '@angular/core';
import { HalResourceService } from '../diaas-angular-cdk-hal.service';

@Component({
  selector: 'dxc-hal-table',
  templateUrl: './dxc-hal-table.component.html',
  styleUrls: ['./dxc-hal-table.component.scss']
})
export class DxcHalTableComponent implements OnInit {

  @Input() halService : any;
  @Input() columns : Array<any>;

  public fetchStatus;
  public resource;
  public error;
  public items;

  page : number = 1;
  totalItems : number = 27;
  itemsPerPage : number =10;

  ngOnInit() {
    this.halService.fetchResource();
    this.fetchStatus = this.halService.fetchStatus;
    this.resource = this.halService.resource;
    this.error = this.halService.errorMessage;
    this.items = this.halService.items;
  }

  navigate(operation:string){
    this.halService.executeItemsHandler(operation);
  }

  getItemPropertyValue(item, propertyKey){
    return item !== undefined && item !== null && item.summary!== null && item.summary && item.summary[propertyKey] !== null && item.summary[propertyKey] !== undefined ? 
      item.summary[propertyKey]: '';
  }

}

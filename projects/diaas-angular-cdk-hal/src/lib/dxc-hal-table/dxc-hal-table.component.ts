import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dxc-hal-table',
  templateUrl: './dxc-hal-table.component.html',
  styleUrls: ['./dxc-hal-table.component.scss']
})
export class DxcHalTableComponent implements OnInit {

  @Input() halService : any;
  @Input() columns : Array<any>;
  @Input() itemsPerPage : number;

  public fetchStatus: any;
  public resource: any;
  public error: any;
  public items: any;
  
  totalItems : any;
  page : number = 1;

  ngOnInit() {
    this.halService.handleGet({
      url: this.halService.addPageParams(this.page, this.itemsPerPage), 
      status: 'navigating'
    });
    this.fetchStatus = this.halService.fetchStatus;
    this.resource = this.halService.resource;
    this.error = this.halService.errorMessage;
    this.items = this.halService.items;
    this.totalItems = this.halService.totalItems;
    // this.halService.totalItems.subscribe( (value: number) => this.totalItems = value );
  }

  navigate(page: number, operation:string){
    switch (operation) {
      case 'next': 
      case 'first':
      case 'prev':
      case 'last':
        this.page=page;
        return this.halService.handleGet({ 
          url: this.halService.addPageParams(this.page, this.itemsPerPage),
          status: 'navigating'
        });                                                                     
      default:
        this.halService.buildErrorResponse({
          message: `Error. Operation  ${operation} is not known.`
        });
        break;
    }
  }

  runColumnFunction(column: any, item: any) {
    column.onClickItemFunction(column, item);
  }

  getItemPropertyValue(item, propertyKey){
    return item !== undefined && item !== null && item.summary!== null && item.summary && item.summary[propertyKey] !== null && item.summary[propertyKey] !== undefined ? 
      item.summary[propertyKey]: '';
  }

}

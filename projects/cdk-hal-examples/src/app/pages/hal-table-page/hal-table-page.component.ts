import { Component, OnInit, Inject } from '@angular/core';
import { HalResourceService } from 'projects/diaas-angular-cdk-hal/src/projects';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-hal-table-page',
  templateUrl: './hal-table-page.component.html',
  styleUrls: ['./hal-table-page.component.scss']
})
export class HalTablePageComponent  {

  displayedColumns = 
    {
        columns: ["prospect-update-user", 
                  "prospect-birthdate", 
                  "prospect-email"],
        labels: ['PROSPECT', 'BIRTHDATE', 'EMAIL']
    };

  data; 

  page : number = 1;

  itemsPerPage : number = 10;

  totalItems = this.collectionProspectService.totalItems;

  fetchStatus = this.collectionProspectService.fetchStatus;

  constructor(@Inject('collectionProspectService') 
    private collectionProspectService: HalResourceService) { 

    this.collectionProspectService.handleGet({
      url: this.collectionProspectService.addPageParams(this.page, 10), 
      status: 'navigating'
    });

    this.data = new ExampleDataSource(this.collectionProspectService.items);
  }

  navigate(page: number, operation:string){
    switch (operation) {
      case 'next': 
      case 'first':
      case 'prev':
      case 'last':
        this.page=page;
        return this.collectionProspectService.handleGet({ 
          url: this.collectionProspectService.addPageParams(this.page, this.itemsPerPage),
          status: 'navigating'
        });                                                                     
      default:
        this.collectionProspectService.buildErrorResponse({
          message: `Error. Operation  ${operation} is not known.`
        });
        break;
    }
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Stream of data that is provided to the table. */

  data = new BehaviorSubject<[]>([]);
  
  constructor(items){
    super();
    this.data = items;
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<[]> {
    return this.data;
  }

  disconnect() {}
}



import { Component, OnInit, Inject } from '@angular/core';
import { HalResourceService } from 'projects/diaas-angular-cdk-hal/src/projects';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { ComponentExampleComponent } from '../../components/component-example/component-example.component';

@Component({
  selector: 'app-hal-table-page',
  templateUrl: './hal-table-page.component.html',
  styleUrls: ['./hal-table-page.component.scss']
})
export class HalTablePageComponent implements OnInit {

  columns: Array<any>;
  itemsPerPage : number = 10;

  columnFunction = function (column : any, item: any) {
                    console.log(item.summary[column.property]);
                  };
  
  constructor(@Inject('CollectionProspectService') private collectionProspectService: HalResourceService) { 
  
  }

  ngOnInit() {
    this.columns = 
    [
      {
        header: "Title",
        property: "prospect-title",
        onClickItemFunction: function () {console.log('awesome')}
      },
      {
        header: "Given Name",
        property: "prospect-given-name",
        component: ComponentExampleComponent
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

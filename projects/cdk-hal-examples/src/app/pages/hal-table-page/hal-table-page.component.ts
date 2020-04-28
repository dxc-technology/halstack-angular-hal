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

  constructor() {  
  }
}


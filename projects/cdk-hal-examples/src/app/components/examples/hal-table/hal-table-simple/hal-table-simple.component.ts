import { Component, OnInit, Inject } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-hal-table-simple',
  templateUrl: './hal-table-simple.component.html',
  styleUrls: ['./hal-table-simple.component.scss']
})
export class HalTableSimple  {

  displayedColumns =
    {
        columns: ["prospect-update-user",
                  "prospect-birthdate",
                  "prospect-email"],
        labels: ['PROSPECT', 'BIRTHDATE', 'EMAIL']
    };
  
    constructor() { 
    }
  
    ngOnInit() {
  
    }
}


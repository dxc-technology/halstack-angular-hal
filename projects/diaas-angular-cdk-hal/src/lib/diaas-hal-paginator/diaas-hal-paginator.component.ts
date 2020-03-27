import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'lib-diaas-hal-paginator',
  templateUrl: './diaas-hal-paginator.component.html',
  styleUrls: ['./diaas-hal-paginator.component.css']
})
export class DiaasHalPaginatorComponent implements OnInit {

  @Input()
  currentPage=1;

  @Input()
  intemsPerPage = 5;

  @Input()
  totalItem = 1;

  // @Output()
  // nextFunction: EventEmitter<any> = new EventEmitter<any>();

  // @Output()
  // prevFunction:  EventEmitter<any> = new EventEmitter<any>();



  constructor() { }

  ngOnInit() {
  }

}

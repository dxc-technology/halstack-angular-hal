import { ViewEncapsulation, ChangeDetectionStrategy, Component, Input, AfterContentChecked, OnDestroy, OnInit } from '@angular/core';
import { DXC_HAL_TABLE } from './tokens';
import { CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'dxc-hal-table',
  exportAs: 'halTable',
  templateUrl: './hal-table.html',
  encapsulation: ViewEncapsulation.None,
  // The "OnPush" status for the `MatTable` component is effectively a noop, so we are removing it.
  // The view for `MatTable` consists entirely of templates declared in other views. As they are
  // declared elsewhere, they are checked when their declaration points are checked.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [{provide: DXC_HAL_TABLE, useExisting: HalTable}]
})
export class HalTable<T> implements AfterContentChecked, CollectionViewer, OnDestroy, OnInit {

  @Input()
  itemsPerPage: number = 5;

  displayedColumns:string[] = [];

  viewChange: BehaviorSubject<{start: number, end: number}> =
  new BehaviorSubject<{start: number, end: number}>({start: 0, end: Number.MAX_VALUE});


  ngOnInit(){

  }

  ngAfterContentChecked(){

  }

  ngOnDestroy(){

  }

}

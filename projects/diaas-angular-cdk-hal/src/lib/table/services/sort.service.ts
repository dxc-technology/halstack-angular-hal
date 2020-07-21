import { Injectable } from '@angular/core';
import { Ordering } from '../directives/sorting.directive';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  defaultSort: string;
  ascSort: string;
  descSort: string;

  //Map with all header's state
  mapStatesHeaders = new Map();

  constructor() { }

  /** Set to default state the given header id (like "header-user"). */
 removeOtherSortings(id){
    let columnName = id.split("-")[1];
    let className = id.split("-")[2];
    let spanIcon = document.getElementById(`iconSort-${columnName}-${className}`);
    spanIcon.innerHTML = this.getDefaultIcon(columnName);
    this.mapStatesHeaders.set(columnName,"default");
    document.getElementById(id).setAttribute("state","default");
  }

  /** Set default icon to the header. */
  setDefaultIconSort(el: Ordering){
    let columnName = el.elementRef.nativeElement.id;
    el.elementRef.nativeElement.children[0].innerHTML = this.getDefaultIcon(columnName);
  }

  /** Set asc icon to the header. */
  setAscIconSort(el: Ordering){
    let columnName = el.elementRef.nativeElement.id;
    el.elementRef.nativeElement.children[0].innerHTML = this.getAscIcon(columnName);
  }
  /** Set desc icon to the header. */
  setDescIconSort(el: Ordering){
    let columnName = el.elementRef.nativeElement.id;
    el.elementRef.nativeElement.children[0].innerHTML = this.getDescIcon(columnName);
  }

  /** Return default icon for the given header. */
  getDefaultIcon(columnName: string){
    return `<svg id="icon_default-${columnName}" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/></svg>`;
  }

  /** Return asc icon for the given header. */
  getAscIcon(columnName: string){
    return `<svg id="icon_asc-${columnName}" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>`;
  }

  /** Return desc icon for the given header. */
  getDescIcon(columnName: string){
    return `<svg id="icon_desc-${columnName}" xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 24 24" width="24" fill="white"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>`;
  }

}

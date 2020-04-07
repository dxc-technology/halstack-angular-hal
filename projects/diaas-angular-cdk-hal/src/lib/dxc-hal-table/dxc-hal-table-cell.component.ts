import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ComponentFactoryResolver, Injector, ApplicationRef, AfterViewInit, OnDestroy, InjectionToken } from '@angular/core';
import {ComponentPortal, DomPortalHost, CdkPortal, PortalInjector} from '@angular/cdk/portal';

export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');

@Component({
  selector: 'dxc-hal-table-cell',
  template: '',
  providers: []
})
export class DxcHalTableCellComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() component: any;
  @Input() selector: any;
  @Input() value: any;

  @ViewChild(CdkPortal, {static:false}) cdkPortal;
  
  private portalHost: DomPortalHost;
  private portal;
  
  constructor(
     private componentFactoryResolver: ComponentFactoryResolver, 
     private injector: Injector,
     private appRef: ApplicationRef
  ) {}
  
  ngOnInit(): void {
  
  }

  createInjector(dataToPass): PortalInjector {
    const injectorTokens = new WeakMap();
    injectorTokens.set(CONTAINER_DATA, dataToPass);
    return new PortalInjector(this.injector, injectorTokens);
}

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    const selector = (document.querySelector('#' + this.selector));
    // if (selector!==null){
      this.portalHost = new DomPortalHost(
        selector,
        this.componentFactoryResolver,
        this.appRef,
        this.injector
      );
    this.portal = new ComponentPortal(this.component, null, this.createInjector(this.value));

    if (this.portalHost!= undefined)
      this.portalHost.attach(this.portal);
    // }
    
  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  } 
}

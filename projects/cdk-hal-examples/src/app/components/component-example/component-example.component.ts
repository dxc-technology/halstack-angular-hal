import { Component, OnInit, InjectionToken, Inject } from '@angular/core';

export const CONTAINER_DATA = new InjectionToken<{}>('CONTAINER_DATA');

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.scss']
})
export class ComponentExampleComponent implements OnInit {

  @Inject(CONTAINER_DATA) public componentData: any
  
  constructor() { }

  ngOnInit() {
  }

}

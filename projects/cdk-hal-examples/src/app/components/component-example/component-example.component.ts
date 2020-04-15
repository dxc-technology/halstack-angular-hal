import { Component, OnInit, InjectionToken, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.scss']
})
export class ComponentExampleComponent implements OnInit {

  @Input() componentData: string;
  
  constructor() {
    this.componentData='uno';
   }

  ngOnInit() {
    console.log(this.componentData);
  }

  ngAfterViewInit() {
    console.log(this.componentData);
  }
}

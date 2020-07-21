import { Component, OnInit, Inject } from "@angular/core";
import { Example } from "../../../../model/example";
import { ExampleService } from "../../../../service/example.service";
import { HalTableSimple } from '../hal-table-simple/hal-table-simple.component';

@Component({
  selector: "app-hal-table-example",
  templateUrl: "./hal-table-example.component.html",
  styleUrls: ["./hal-table-example.component.scss"],
})
export class HalTableExample implements OnInit {
  examples: Array<Example>;

  constructor(
    @Inject("ExampleService") private exampleService: ExampleService
  ) {
    this.examples = new Array();
  }

  ngOnInit() {
    this.createExamples();
  }

  private createExamples() {
    this.exampleService
      .getCodeExample("hal-table/hal-table-simple/hal-table-simple.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Simple Hal Table',
          component: HalTableSimple,
          selector: "Table_example_1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
  }
}

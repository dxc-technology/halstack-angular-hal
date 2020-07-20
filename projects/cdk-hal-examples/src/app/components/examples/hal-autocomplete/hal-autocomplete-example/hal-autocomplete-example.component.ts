import { Component, OnInit, Inject } from "@angular/core";
import { Example } from "../../../../model/example";
import { ExampleService } from "../../../../service/example.service";
import { AutocompleteHalSimple } from '../hal-autocomplete-simple/hal-autocomplete-simple.component';

@Component({
  selector: "app-hal-autocomplete-example",
  templateUrl: "./hal-autocomplete-example.component.html",
  styleUrls: ["./hal-autocomplete-example.component.scss"],
})
export class AutocompleteHalExample implements OnInit {
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
      .getCodeExample("hal-autocomplete/hal-autocomplete-simple/hal-autocomplete-simple.component").subscribe(resp1 => {
        this.examples.push(this.exampleService.generateExample({
          title: 'Simple Hal Autocomplete',
          component: AutocompleteHalSimple,
          selector: "Autocomplete_example_1",
          examples: [
            resp1[0],
            resp1[1],
            resp1[2]
          ]
        }));
      });
  }
}

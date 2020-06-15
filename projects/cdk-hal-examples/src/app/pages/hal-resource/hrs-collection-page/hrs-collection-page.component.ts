import { Component, OnInit, Inject } from "@angular/core";
import { HalResourceService } from "../../services/diaas-angular-cdk-hal.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { HalResourceServiceFactoryProvider } from "../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.factory-provider";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: "app-hrs-collection-page",
  templateUrl: "./hrs-collection-page.component.html",
  styleUrls: ["./hrs-collection-page.component.scss"],
  providers: [HalResourceService]
})
export class HrsCollectionPageComponent implements OnInit {
  fetchStatus: BehaviorSubject<string> = new BehaviorSubject('');
  error: BehaviorSubject<any> = new BehaviorSubject(null);
  items: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  collectionPropectService: HalResourceService;

  constructor(
    httpClient: HttpClient
  ) {
    this.collectionPropectService = new HalResourceService(
      "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/telephones",
      new HttpHeaders({
        "x-api-key": "F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"
      }),
      httpClient
    );
    this.fetchStatus = this.collectionPropectService.fetchStatus;
    this.error = this.collectionPropectService.errorMessage;
    this.items = this.collectionPropectService.items;
    this.collectionPropectService.fetchResource();
  }

  ngOnInit() {}

  navigate(operation: string) {
    this.collectionPropectService.executeItemsHandler(operation);
  }

  getItemPropertyValue(item, propertyKey) {
    return item !== undefined &&
      item !== null &&
      item.summary !== null &&
      item.summary &&
      item.summary[propertyKey] !== null &&
      item.summary[propertyKey] !== undefined
      ? item.summary[propertyKey]
      : "";
  }
}

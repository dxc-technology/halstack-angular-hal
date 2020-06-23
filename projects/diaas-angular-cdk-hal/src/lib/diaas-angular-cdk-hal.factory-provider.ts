import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Provider } from '@angular/compiler/src/core';
import { HalResourceService } from './table/services/diaas-angular-cdk-hal.service';
@Injectable()
export class HalResourceServiceFactoryProvider{
    static createInstance(provide:any, url: string, optionsHeader: any): Provider{

    const halServiceFactory = (httpClient: HttpClient) => {
      return new HalResourceService(url, new HttpHeaders(optionsHeader), httpClient);
    };

    return {
          provide: provide,
          useFactory : halServiceFactory,
          deps: [HttpClient]
      };
    }
}

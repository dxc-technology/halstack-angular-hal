import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Provider } from '@angular/compiler/src/core';
import { HalResourceService } from './diaas-angular-cdk-hal.service';

@Injectable()
export class HalResourceServiceFactoryProvider{
    static createInstance(provide:any, url: string, optionsHeader: any): Provider{
        return {
             provide: provide,
             useFactory : (httpClient: HttpClient) => new HalResourceService(url, 
                new HttpHeaders(optionsHeader), httpClient),
             deps: [HttpClient]
          };
    }  
}
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {
  HalResource
} from "@dxc-technology/halstack-client";

const fetchingStatus:string = 'fetching';
const doneStatus:string = 'done';
const patchingStatus:string = 'patching';
const creatingStatus:string = 'creating';

@Injectable()
export class HalResourceService {

  resource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  errorMessage: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  fetchStatus: BehaviorSubject<string> = new BehaviorSubject<string>(doneStatus);
  halResource: any;

  constructor(
    public url: string,
    public headers: HttpHeaders,
    private httpClient: HttpClient
  ) {}

  fetchResource() {
    this.fetchStatus.next(fetchingStatus);
    return this.httpClient.get(this.url, { headers: this.headers }).subscribe(
      resp => {
        this.halResource = HalResource(resp);
        this.resource.next( 
          {... this.halResource    });
        this.fetchStatus.next(doneStatus);
        this.errorMessage.next(null);
      },
      err => {
        this.buildErrorResponse(err);
      }
    );
  }
   getHandlers() {
    if (this.halResource.getInteractions()!=null && 
          this.halResource.getInteractions().length>0){
      return this.halResource.getInteractions().map(
        interaction => ({
           rel: interaction.rel, 
           handler: (body?:any) => {
            switch (interaction.method) {
              case 'GET':
                return this.handleGet();
              case 'PATCH': 
                if ( this.existPropertiesSchema(interaction,body)){
                  return this.handlePatch(body);
                }else {
                  this.buildErrorResponse({message: `Error.Property ${Object.keys(body)} is not patcheable.`});
                  break;
                }                  
              case 'POST': 
                return this.handlePost(body);
              default:
                this.buildErrorResponse({message: `Error. Operation  ${interaction.rel} is not known.`});
                break;
            }       
        } 
      }));
    }
  }

  private handlePost(body: string) {
    this.fetchStatus.next(creatingStatus);
    return this.httpClient.post(this.url, body, { headers: this.headers }).subscribe(resp => {
      this.halResource = HalResource(resp);
      this.resource.next({
        ...this.halResource
      });
      this.errorMessage.next(null);
      this.fetchStatus.next(doneStatus);
    }, err => {
      this.buildErrorResponse(err);
    });
  }

  private handleGet() {
    this.fetchStatus.next(fetchingStatus);
    return this.httpClient.get(this.url, { headers: this.headers }).subscribe(resp => {
      this.halResource = HalResource(resp);
      this.resource.next({
        ...this.halResource
      });
      this.fetchStatus.next(doneStatus);
    }, err => {
      this.buildErrorResponse(err);
    });
  }

  private handlePatch(body: string) {
    this.fetchStatus.next(patchingStatus);
    return this.httpClient.patch(this.url, body, { headers: this.headers }).subscribe(resp => {
      this.halResource = HalResource(resp);
      this.resource.next({
        ...this.halResource
      });
      this.errorMessage.next(null);
      this.fetchStatus.next(doneStatus);
    }, err => {
      this.buildErrorResponse(err);
    });
  }

  private buildErrorResponse(err: any) {
    this.errorMessage.next(err.message);
    this.fetchStatus.next(null);
    this.fetchStatus.next(doneStatus);
  }

  private existPropertiesSchema(interaction, payload){
    let valid = true;
    Object.keys(payload).forEach(element => {
      if (interaction.getSchemaProperty(element) === null || interaction.getSchemaProperty(element) === undefined){
        valid = false;
      }
    });
    return valid;
  }
}
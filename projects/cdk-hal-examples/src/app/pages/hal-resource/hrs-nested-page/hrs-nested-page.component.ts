import { Component, OnInit } from '@angular/core';
import { HalResourceService } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hrs-nested-page',
  templateUrl: './hrs-nested-page.component.html',
  styleUrls: ['./hrs-nested-page.component.scss']
})
export class HrsNestedPageComponent implements OnInit {

  fetchStatus = this.halResource.fetchStatus;
  resource = this.halResource.resource;
  telephoneResource: HalResourceService;
  error = this.halResource.errorMessage;

  showTelephoneResource = false;

  constructor(private halResource: HalResourceService, private httpClient: HttpClient) { 
    this.halResource.fetchResource();
  }
  
  getPropertyValue(propertyName:string){
    return this.halResource.resource.getValue().resourceRepresentation[propertyName];
  }

  close(){
    this.error.next(null);
  }

  ngOnInit() {

  }

  loadTelephone(){
    this.telephoneResource = new HalResourceService('http://localhost:3000/data/prospects/5e044795cff47e0009e03ac5/telephones/1',
    new HttpHeaders({}), this.httpClient);
    this.telephoneResource.fetchResource();
    this.showTelephoneResource = true;
  }

  logTelephoneResource(){
    console.debug(this.telephoneResource.resource.getValue());
  }

  onPatchUpdateUser(value){
    const payload = {};    
    payload['prospect-update-user'] = value;
    this.patchResource(payload);
  }

  onPatchEmail(value){
    const payload = {};    
    payload['prospect-email'] = value;
    this.patchResource(payload);
  }

  private patchResource(payload){
    this.halResource.executeHandler('update', payload);
 }

  onClick(){
    this.halResource.executeHandler('fetch');
  }

}

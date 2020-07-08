import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HalResourceService } from '@diaas/dxc-ngx-hal';

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
    this.telephoneResource = new HalResourceService('https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/telephones/1',
    new HttpHeaders({"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"}), this.httpClient);
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

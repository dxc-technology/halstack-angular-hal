import { Component, OnInit } from '@angular/core';
import { HalResourceService } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.service';

@Component({
  selector: 'app-hrs-single-page',
  templateUrl: './hrs-single-page.component.html',
  styleUrls: ['./hrs-single-page.component.scss']
})
export class HrsSinglePageComponent implements OnInit {

  fetchStatus = this.halResource.fetchStatus;
  resource = this.halResource.resource;
  error = this.halResource.errorMessage;

  constructor(private halResource: HalResourceService) {
    this.halResource.fetchResource();

  }

  getPropertyValue(propertyName:string){
    return this.halResource.resource.getValue().resourceRepresentation[propertyName];
  }

  ngOnInit() {

  }
  close(){
    this.error.next(null);
  }

  onPatchProspectTitle(value){
    const payload = {};
    payload['prospect-title'] = value;
    this.patchResource(payload);
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

  isPropertyRequired(propertyName){
    return this.halResource.resource.getValue().isPropertyRequired(propertyName);
  }

  private patchResource(payload){
    this.halResource.executeHandler('update', payload);
  }

  onClick(){
    this.halResource.executeHandler('fetch');
  }

}

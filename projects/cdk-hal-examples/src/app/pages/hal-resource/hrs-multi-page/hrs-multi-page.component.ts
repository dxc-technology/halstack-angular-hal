import { Component, OnInit, Inject } from '@angular/core';
import { HalResourceService } from '../../../../../../diaas-angular-cdk-hal/src/lib/diaas-angular-cdk-hal.service';

@Component({
  selector: 'app-hrs-multi-page',
  templateUrl: './hrs-multi-page.component.html',
  styleUrls: ['./hrs-multi-page.component.scss']
})
export class HrsMultiPageComponent implements OnInit {

  fetchProspectStatus = this.propectService.fetchStatus;
  prospectResource = this.propectService.resource;

  fetchTelephoneStatus = this.telephonePropectService.fetchStatus;
  telephoneProspectResource = this.telephonePropectService.resource;

  errorTelephone = this.telephonePropectService.errorMessage;
  errorProspect = this.propectService.errorMessage;

  constructor(@Inject('PropectService') private propectService: HalResourceService,
              @Inject('TelephonePropectService') private telephonePropectService: HalResourceService) {
    this.propectService.fetchResource();
    this.telephonePropectService.fetchResource();
  }

  ngOnInit() {
  }

  onClose(){
    this.errorProspect.next(null);
    this.errorTelephone.next(null);
  }

  onRefreshProspect(){
    this.propectService.executeHandler('fetch');
  }

  onRefreshTelephone(){
    this.telephonePropectService.executeHandler('fetch');
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

  onPatchTelephoneNumber(value){
    const payload = {};
    payload['prospect-email'] = value;
    this.telephonePropectService.executeHandler('update', payload);
  }

  private patchResource(payload){
    this.propectService.executeHandler('update', payload);
  }

  getProspectPropertyValue(propertyName:string){
    return this.propectService.resource.getValue().resourceRepresentation[propertyName];
  }

  getTelephonePropertyValue(propertyName:string){
    return this.telephonePropectService.resource.getValue().resourceRepresentation[propertyName];
  }


}

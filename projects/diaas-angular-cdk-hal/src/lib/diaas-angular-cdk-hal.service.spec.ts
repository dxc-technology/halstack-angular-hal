import { TestBed } from '@angular/core/testing';

import { HalResourceService } from './diaas-angular-cdk-hal.service';
import { HalResourceServiceFactoryProvider } from './diaas-angular-cdk-hal.factory-provider';
import { HttpClientModule } from '@angular/common/http';

describe('HalResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ],
    providers: [
      HalResourceServiceFactoryProvider.createInstance(
        HalResourceService,
        'https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5',
        {"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"})
    ]
  }));

  it('should be created', () => {
    const service: HalResourceService = TestBed.get(HalResourceService);
    expect(service).toBeTruthy();
  });

  it('should be initialized: fetchStatus, resource, and error.', () => {
    const service: HalResourceService = TestBed.get(HalResourceService);

    const fetchStatus = service.fetchStatus;
    const resource = service.resource;
    const error = service.errorMessage;

    expect(resource.getValue()).toBeNull();
    expect(error.getValue()).toBeNull();
    expect(fetchStatus.getValue()).toBe('done');

  });

});

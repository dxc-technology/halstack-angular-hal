import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HalResourceService } from './diaas-angular-cdk-hal.service';
import { HalResourceServiceFactoryProvider } from '../../diaas-angular-cdk-hal.factory-provider';

describe('HalResourceService', () => {

  let httpMock: HttpTestingController;
  const apiURL = 'https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5';
  const dummyResponse: any = {
    "prospect-update-user": "Agent@csc.com",
    "prospect-birthdate": "1992-06-26",
    "prospect-email": "pepe",
    "_links": {
      "prospect:prospect-telephone-list": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/telephones"
      },
      "prospect:quote-linked-resource-creation": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/linkedResourceCreation"
      },
      "prospect:quote-link-resources": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/linkResources"
      },
      "prospect:prospect-address-list": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/addresses"
      },
      "prospect:status_report": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/status_report"
      },
      "prospect:prospect-risk": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/risk"
      },
      "prospect:prospect-financial-knowledge": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/financialKnowledge"
      },
      "prospect:prospect-email-list": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/emails"
      },
      "prospect:prospect-demography": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/demography"
      },
      "self": {
        "name": "Prospects List",
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5",
        "title": "Prospects List"
      },
      "prospect:prospect-id-list": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/ids"
      },
      "up": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects"
      },
      "prospect:prospect-financial-position": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/financial"
      },
      "prospect:prospect-pdpa": {
        "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5/pdpas"
      }
    },
    "prospect-client-number": "",
    "_options": {
      "links": [
        {
          "schema": {
            "properties": {
              "case_insensitive": {
                "type": "string",
                "enum": []
              },
              "sort": {
                "type": "string",
                "enum": []
              }
            },
            "required": []
          },
          "method": "GET",
          "rel": "fetch",
          "mediaType": "application/vnd.hal+json",
          "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5",
          "title": "Fetch Prospect details"
        },
        {
          "schema": {
            "properties": {
              "prospect-update-user": {
                "type": "string"
              },
              "prospect-given-name": {
                "type": "string"
              },
              "prospect-birthdate": {
                "format": "date",
                "type": "string"
              },
              "prospect-email": {
                "type": "string"
              },
              "prospect-update-date": {
                "format": "date",
                "type": "string"
              },
              "prospect-last-name": {
                "type": "string"
              },
              "prospect-title": {
                "type": "string",
                "enum": [
                  "Dr",
                  "Miss",
                  "Mr",
                  "Mrs",
                  "Ms",
                  "Professor",
                  "Reverend",
                  "Sir"
                ]
              },
              "prospect-mobile-phone": {
                "type": "string"
              },
              "prospect-full-name": {
                "type": "string"
              }
            },
            "required": [
              "prospect-given-name",
              "prospect-last-name",
              "prospect-title"
            ]
          },
          "method": "PATCH",
          "rel": "update",
          "mediaType": "application/json",
          "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5",
          "title": "Update a Prospect"
        },
        {
          "schema": {
            "properties": {},
            "required": []
          },
          "method": "DELETE",
          "rel": "delete",
          "mediaType": "application/vnd.hal+json;application/json",
          "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e044795cff47e0009e03ac5",
          "title": "Delete Prospect Resource"
        }
      ],
      "title": "Prospect Interactions",
      "properties": {
        "prospect-update-user": {
          "type": "string"
        },
        "prospect-birthdate": {
          "format": "date",
          "type": "string"
        },
        "prospect-email": {
          "type": "string"
        },
        "prospect-client-number": {
          "type": "string"
        },
        "prospect-create-user": {
          "type": "string"
        },
        "prospect-doc-type": {
          "type": "string"
        },
        "prospect-full-name": {
          "type": "string"
        },
        "prospect-given-name": {
          "type": "string"
        },
        "prospect-update-date": {
          "format": "date",
          "type": "string"
        },
        "original-prospect": {
          "type": "string"
        },
        "prospect-last-name": {
          "type": "string"
        },
        "prospect-start-date": {
          "format": "date",
          "type": "string"
        },
        "prospect-doc-name": {
          "type": "string"
        },
        "_create_state": {
          "type": "string",
          "enum": [
            "DRAFT",
            "CREATED"
          ]
        },
        "prospect-doc-id": {
          "type": "string"
        },
        "prospect-title": {
          "type": "string",
          "enum": [
            "Dr",
            "Miss",
            "Mr",
            "Mrs",
            "Ms",
            "Professor",
            "Reverend",
            "Sir"
          ]
        },
        "prospect-mobile-phone": {
          "type": "string"
        },
        "prospect-distributor-id": {
          "type": "string"
        },
        "prospect-status": {
          "type": "string"
        }
      },
      "required": [
        "prospect-given-name",
        "prospect-last-name",
        "prospect-title"
      ]
    },
    "prospect-create-user": "Agent@csc.com",
    "prospect-doc-type": "prospect",
    "prospect-full-name": "Testsergsergseasdfasdfasdf Kumar",
    "prospect-given-name": "Testsergsergseasdfasdfasdf",
    "prospect-update-date": "2020-03-24",
    "original-prospect": "",
    "prospect-last-name": "Kumar",
    "prospect-start-date": "2019-12-26",
    "prospect-doc-name": "",
    "_create_state": "CREATED",
    "prospect-doc-id": "5e044795cff47e0009e03ac5",
    "prospect-title": "",
    "prospect-mobile-phone": "",
    "prospect-distributor-id": "Agent@csc.com",
    "prospect-status": "INVALID"
  
};

  beforeEach( () => TestBed.configureTestingModule({
    
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      HalResourceServiceFactoryProvider.createInstance(
        HalResourceService,
        apiURL,
        {"x-api-key":"F9Pl5g8RlA4bx7NkCYfIP6lEM78Gwage4ZTURipo"})
    ]
  })
   );

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


  it('should be returned a halResource:  Fetch operation and resource is returned.', () => {
    
    httpMock = TestBed.get(HttpTestingController);
    const service: HalResourceService = TestBed.get(HalResourceService);
    const fetchStatus = service.fetchStatus;
    const resource = service.resource;
    const error = service.errorMessage;

    service.fetchResource();
    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyResponse);

    expect(fetchStatus.getValue()).toEqual('done');
    expect(resource.getValue()).toBeTruthy();
    expect(error.getValue()).toBeNull();
  });

  it('should retrieves an error in patch operation: propety patch does not exist.', () => {
    
    httpMock = TestBed.get(HttpTestingController);
    const service: HalResourceService = TestBed.get(HalResourceService);
    
    const error = service.errorMessage;
    service.fetchResource();
    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyResponse);

    service.getHandlers().find(x => x.rel == 'update').handler({'test':'julio valeije'});   
    expect(error.getValue()).toBeTruthy();
  });


  it('should retrieves response in patch operation: propety patch exist and patch is done.', () => {
    
    httpMock = TestBed.get(HttpTestingController);
    const service: HalResourceService = TestBed.get(HalResourceService);

    const resource = service.resource;
    const fetchStatus = service.fetchStatus;
    const error = service.errorMessage;
    service.fetchResource();

    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyResponse);

    service.getHandlers().find(x => x.rel == 'update').handler({'prospect-update-user':'julio valeije'});   
    expect(fetchStatus.getValue()).toEqual('patching');

    const reqPatch = httpMock.expectOne(apiURL);
    expect(reqPatch.request.method).toBe("PATCH");
    reqPatch.flush(dummyResponse);

    expect(fetchStatus.getValue()).toEqual('done');
    expect(resource.getValue()).toBeTruthy();
    expect(error.getValue()).toBeNull();
  });

  it('should retrieves an error in patch operation: propety patch does not exist.', () => {
    
    httpMock = TestBed.get(HttpTestingController);
    const service: HalResourceService = TestBed.get(HalResourceService);
    
    const error = service.errorMessage;
    service.fetchResource();
    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyResponse);

    service.getHandlers().find(x => x.rel == 'update').handler({'test':'julio valeije'});   
    expect(error.getValue()).toBeTruthy();
  });


  it('should retrieves response in patch operation: propety patch exist and patch is done.', () => {
    
    httpMock = TestBed.get(HttpTestingController);
    const service: HalResourceService = TestBed.get(HalResourceService);

    const resource = service.resource;
    const fetchStatus = service.fetchStatus;
    const error = service.errorMessage;
    service.fetchResource();

    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyResponse);

    service.getHandlers().find(x => x.rel == 'update').handler({'prospect-update-user':'julio valeije'});   
    expect(fetchStatus.getValue()).toEqual('patching');

    const reqPatch = httpMock.expectOne(apiURL);
    expect(reqPatch.request.method).toBe("PATCH");
    reqPatch.flush(dummyResponse);

    expect(fetchStatus.getValue()).toEqual('done');
    expect(resource.getValue()).toBeTruthy();
    expect(error.getValue()).toBeNull();
  });


  it('should retrieves response in delete operation: delete does not exist an retrieves an error.', 
    () => {
    
    httpMock = TestBed.get(HttpTestingController);
    const service: HalResourceService = TestBed.get(HalResourceService);

    const resource = service.resource;
    const fetchStatus = service.fetchStatus;
    const error = service.errorMessage;
    service.fetchResource();

    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyResponse);

    service.getHandlers().find(x => x.rel == 'update').handler({'prospect-update-user':'julio valeije'});   
    expect(fetchStatus.getValue()).toEqual('creating');

    const reqPatch = httpMock.expectOne(apiURL);
    expect(reqPatch.request.method).toBe("PATCH");
    reqPatch.flush(dummyResponse);

    expect(fetchStatus.getValue()).toEqual('done');
    expect(resource.getValue()).toBeTruthy();
    expect(error.getValue()).toBeNull();
  });


});

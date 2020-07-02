import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HalResourceServiceFactoryProvider } from './diaas-angular-cdk-hal.factory-provider';
import { HalResourceService } from './diaas-angular-cdk-hal.service';

describe('HalResourceService', () => {

  let httpMock: HttpTestingController;
  const apiURL = 'http://localhost:3000/data';
  const dummyResponse: any = {
    "data": {
      "_links": {
          "next": {
              "href": "http://localhost:3000/data/?_start=16&_num=5"
          },
          "item": [
              {
                  "summary": {
                      "prospect-update-user": "Agent@csc.com",
                      "prospect-birthdate": "2001-12-04",
                      "prospect-email": "",
                      "prospect-client-number": "",
                      "prospect-create-user": "Agent@csc.com",
                      "prospect-doc-type": "prospect",
                      "prospect-full-name": "BOCJT FJUUZ",
                      "prospect-given-name": "BOCJT",
                      "prospect-update-date": "2020-03-23",
                      "original-prospect": "",
                      "prospect-last-name": "FJUUZ",
                      "prospect-start-date": "2020-03-23",
                      "prospect-doc-name": "",
                      "_create_state": "CREATED",
                      "prospect-doc-id": "5e7879bc8a1e3405298aa4fb",
                      "prospect-title": "Dr",
                      "prospect-mobile-phone": "",
                      "prospect-distributor-id": "Agent@csc.com",
                      "prospect-status": "DRAFT"
                  },
                  "name": "Prospects List",
                  "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e7879bc8a1e3405298aa4fb",
                  "title": "Prospects List"
              },
              {
                  "summary": {
                      "prospect-update-user": "Agent@csc.com",
                      "prospect-birthdate": "1992-12-04",
                      "prospect-email": "",
                      "prospect-client-number": "",
                      "prospect-create-user": "Agent@csc.com",
                      "prospect-doc-type": "prospect",
                      "prospect-full-name": "XIFYZ OROKQ",
                      "prospect-given-name": "XIFYZ",
                      "prospect-update-date": "2020-03-23",
                      "original-prospect": "",
                      "prospect-last-name": "OROKQ",
                      "prospect-start-date": "2020-03-24",
                      "prospect-doc-name": "",
                      "_create_state": "CREATED",
                      "prospect-doc-id": "5e7879768a1e3405298aa4fa",
                      "prospect-title": "Dr",
                      "prospect-mobile-phone": "",
                      "prospect-distributor-id": "Agent@csc.com",
                      "prospect-status": "DRAFT"
                  },
                  "name": "Prospects List",
                  "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e7879768a1e3405298aa4fa",
                  "title": "Prospects List"
              },
              {
                  "summary": {
                      "prospect-update-user": "Agent@csc.com",
                      "prospect-birthdate": "2001-12-04",
                      "prospect-email": "",
                      "prospect-client-number": "",
                      "prospect-create-user": "Agent@csc.com",
                      "prospect-doc-type": "prospect",
                      "prospect-full-name": "UOPSC CFRHV",
                      "prospect-given-name": "UOPSC",
                      "prospect-update-date": "2020-03-23",
                      "original-prospect": "",
                      "prospect-last-name": "CFRHV",
                      "prospect-start-date": "2020-03-25",
                      "prospect-doc-name": "",
                      "_create_state": "CREATED",
                      "prospect-doc-id": "5e7879748a1e3405298aa4f9",
                      "prospect-title": "Dr",
                      "prospect-mobile-phone": "",
                      "prospect-distributor-id": "Agent@csc.com",
                      "prospect-status": "DRAFT"
                  },
                  "name": "Prospects List",
                  "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e7879748a1e3405298aa4f9",
                  "title": "Prospects List"
              },
              {
                  "summary": {
                      "prospect-update-user": "Agent@csc.com",
                      "prospect-birthdate": "1992-12-04",
                      "prospect-email": "",
                      "prospect-client-number": "",
                      "prospect-create-user": "Agent@csc.com",
                      "prospect-doc-type": "prospect",
                      "prospect-full-name": "RBGMX SAWLZ",
                      "prospect-given-name": "RBGMX",
                      "prospect-update-date": "2020-03-23",
                      "original-prospect": "",
                      "prospect-last-name": "SAWLZ",
                      "prospect-start-date": "2020-03-23",
                      "prospect-doc-name": "",
                      "_create_state": "CREATED",
                      "prospect-doc-id": "5e7878968a1e3405298aa4f8",
                      "prospect-title": "Dr",
                      "prospect-mobile-phone": "",
                      "prospect-distributor-id": "Agent@csc.com",
                      "prospect-status": "DRAFT"
                  },
                  "name": "Prospects List",
                  "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e7878968a1e3405298aa4f8",
                  "title": "Prospects List"
              },
              {
                  "summary": {
                      "prospect-update-user": "Agent@csc.com",
                      "prospect-birthdate": "2001-12-04",
                      "prospect-email": "",
                      "prospect-client-number": "",
                      "prospect-create-user": "Agent@csc.com",
                      "prospect-doc-type": "prospect",
                      "prospect-full-name": "THISG ZDZOC",
                      "prospect-given-name": "THISG",
                      "prospect-update-date": "2020-03-23",
                      "original-prospect": "",
                      "prospect-last-name": "ZDZOC",
                      "prospect-start-date": "2020-03-23",
                      "prospect-doc-name": "",
                      "_create_state": "CREATED",
                      "prospect-doc-id": "5e7878958a1e3405298aa4f7",
                      "prospect-title": "Dr",
                      "prospect-mobile-phone": "",
                      "prospect-distributor-id": "Agent@csc.com",
                      "prospect-status": "DRAFT"
                  },
                  "name": "Prospects List",
                  "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e7878958a1e3405298aa4f7",
                  "title": "Prospects List"
              },
              {
                "summary": {
                    "prospect-update-user": "Agent222@csc.com",
                    "prospect-birthdate": "2001-12-04",
                    "prospect-email": "",
                    "prospect-client-number": "",
                    "prospect-create-user": "Agent@csc.com",
                    "prospect-doc-type": "prospect",
                    "prospect-full-name": "AAAA BBBB",
                    "prospect-given-name": "AAAA",
                    "prospect-update-date": "2020-03-02",
                    "original-prospect": "",
                    "prospect-last-name": "BBBB",
                    "prospect-start-date": "2020-03-02",
                    "prospect-doc-name": "",
                    "_create_state": "CREATED",
                    "prospect-doc-id": "5e7878958a1e3405298aa4f7",
                    "prospect-title": "Dr",
                    "prospect-mobile-phone": "",
                    "prospect-distributor-id": "Agent222@csc.com",
                    "prospect-status": "DRAFT"
                },
                "name": "Prospects List",
                "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/5e7878958a1e3405298aa4f7",
                "title": "Prospects List"
            }
          ],
          "_count": 6,
          "prev": {
              "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/?_start=6&_num=5"
          },
          "self": {
              "name": "Prospects List",
              "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects",
              "title": "Prospects List"
          },
          "up": {
              "href": "http://ec2-alb-dev-central-external-292825563.ap-southeast-1.elb.amazonaws.com:80/omni-prospect-services/omni/service"
          },
          "first": {
              "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects/?_start=1&_num=5"
          }
      },
      "_options": {
          "links": [
              {
                  "schema": {
                      "properties": {
                          "prospect-birthdate": {
                              "format": "date",
                              "type": "string"
                          },
                          "prospect-email": {
                              "type": "string"
                          },
                          "case_insensitive": {
                              "type": "string",
                              "enum": []
                          },
                          "prospect-update-date": {
                              "format": "date",
                              "type": "string"
                          },
                          "prospect-client-number": {
                              "type": "string"
                          },
                          "prospect-start-date": {
                              "format": "date",
                              "type": "string"
                          },
                          "prospect-doc-name": {
                              "type": "string"
                          },
                          "sort": {
                              "type": "string",
                              "enum": []
                          },
                          "prospect-full-name": {
                              "type": "string"
                          },
                          "prospect-distributor-id": {
                              "type": "string"
                          }
                      },
                      "required": []
                  },
                  "method": "GET",
                  "rel": "search-all",
                  "mediaType": "application/vnd.hal+json",
                  "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects?mode=all",
                  "title": "Search for a Prospect by criteria"
              },
              {
                  "schema": {
                      "properties": {
                          "prospect-birthdate": {
                              "format": "date",
                              "type": "string"
                          },
                          "prospect-email": {
                              "type": "string"
                          },
                          "case_insensitive": {
                              "type": "string",
                              "enum": []
                          },
                          "prospect-update-date": {
                              "format": "date",
                              "type": "string"
                          },
                          "prospect-client-number": {
                              "type": "string"
                          },
                          "prospect-start-date": {
                              "format": "date",
                              "type": "string"
                          },
                          "prospect-doc-name": {
                              "type": "string"
                          },
                          "sort": {
                              "type": "string",
                              "enum": []
                          },
                          "prospect-full-name": {
                              "type": "string"
                          },
                          "prospect-distributor-id": {
                              "type": "string"
                          }
                      },
                      "required": []
                  },
                  "method": "GET",
                  "rel": "search",
                  "mediaType": "application/vnd.hal+json",
                  "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects",
                  "title": "Search for a Prospect by criteria"
              },
              {
                  "schema": {
                      "properties": {},
                      "required": []
                  },
                  "method": "POST",
                  "rel": "create",
                  "mediaType": "application/json",
                  "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects",
                  "title": "Create a Prospect"
              },
              {
                  "schema": {
                      "properties": {
                          "original-prospect": {
                              "type": "string"
                          }
                      },
                      "required": [
                          "original-prospect"
                      ]
                  },
                  "method": "POST",
                  "rel": "copy",
                  "mediaType": "application/json",
                  "href": "https://api.dxc-dev-integral.hub-1.dev.us.insurance.dxc.com/prospects?mode=copy",
                  "title": "Copy a prospect"
              }
          ],
          "title": "Prospect Interactions"
        }
      }

};

  beforeEach( () => TestBed.configureTestingModule({

    imports: [
      HttpClientTestingModule
    ],
    providers: [
      HalResourceServiceFactoryProvider.createInstance(
        HalResourceService,
        apiURL,
        {})
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

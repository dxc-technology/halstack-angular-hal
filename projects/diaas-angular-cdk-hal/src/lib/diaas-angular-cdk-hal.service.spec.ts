import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HalResourceServiceFactoryProvider } from './diaas-angular-cdk-hal.factory-provider';
import { HalResourceService } from './diaas-angular-cdk-hal.service';
import { HttpHeaders } from '@angular/common/http';

describe('HalResourceService', () => {

  let httpMock: HttpTestingController;
  const apiURL = 'http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/jsuarezardid';
  const dummyResponse: any = {
    "username": "jsuarezardid",
    "status": "RESET_REQUIRED",
    "enabled": true,
    "created_date": "2020-05-20T17:47:18.914Z",
    "last_modified_date": "2020-07-03T06:38:46.495Z",
    "sub": "b72eb6f1-4da4-4fce-9fe6-a5154a2c4475",
    "name": null,
    "given_name": "Jesus",
    "family_name": "Suarez",
    "middle_name": null,
    "nickname": null,
    "preferred_username": null,
    "profile": null,
    "picture": null,
    "website": null,
    "email": "jsuarezardid@dxc.com",
    "email_verified": true,
    "gender": null,
    "birthdate": null,
    "zoneinfo": null,
    "locale": null,
    "phone_number": "+34619503567",
    "phone_number_verified": null,
    "address": null,
    "updated_at": null,
    "l": null,
    "st": null,
    "postalcode": null,
    "_options": {
      "properties": {
        "username": {
          "type": "string"
        },
        "status": {
          "type": "string"
        },
        "enabled": {
          "type": "boolean"
        },
        "created_date": {
          "type": "date"
        },
        "last_modified_date": {
          "type": "date"
        },
        "sub": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "given_name": {
          "type": "string"
        },
        "family_name": {
          "type": "string"
        },
        "middle_name": {
          "type": "string"
        },
        "nickname": {
          "type": "string"
        },
        "preferred_username": {
          "type": "string"
        },
        "profile": {
          "type": "string"
        },
        "picture": {
          "type": "string"
        },
        "website": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "email_verified": {
          "type": "boolean"
        },
        "gender": {
          "type": "string"
        },
        "birthdate": {
          "type": "string"
        },
        "zoneinfo": {
          "type": "string"
        },
        "locale": {
          "type": "string"
        },
        "phone_number": {
          "type": "string"
        },
        "phone_number_verified": {
          "type": "boolean"
        },
        "address": {
          "type": "string"
        },
        "updated_at": {
          "type": "number"
        },
        "l": {
          "type": "string"
        },
        "st": {
          "type": "string"
        },
        "postalcode": {
          "type": "string"
        }
      },
      "title": "User",
      "links": [
        {
          "method": "GET",
          "rel": "fetch",
          "mediaType": "application/vnd.hal+json",
          "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/jsuarezardid",
          "title": "Fetch User"
        },
        {
          "method": "PATCH",
          "rel": "update",
          "mediaType": "application/vnd.hal+json",
          "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/jsuarezardid",
          "title": "Update User",
          "schema": {
            "properties": {
              "enabled": {
                "type": "boolean"
              },
              "name": {
                "type": "string"
              },
              "given_name": {
                "type": "string"
              },
              "family_name": {
                "type": "string"
              },
              "middle_name": {
                "type": "string"
              },
              "nickname": {
                "type": "string"
              },
              "preferred_username": {
                "type": "string"
              },
              "profile": {
                "type": "string"
              },
              "picture": {
                "type": "string"
              },
              "website": {
                "type": "string"
              },
              "email": {
                "type": "string"
              },
              "email_verified": {
                "type": "boolean"
              },
              "gender": {
                "type": "string"
              },
              "birthdate": {
                "type": "string"
              },
              "zoneinfo": {
                "type": "string"
              },
              "locale": {
                "type": "string"
              },
              "phone_number": {
                "type": "string"
              },
              "phone_number_verified": {
                "type": "boolean"
              },
              "address": {
                "type": "string"
              },
              "updated_at": {
                "type": "number"
              },
              "l": {
                "type": "string"
              },
              "st": {
                "type": "string"
              },
              "postalcode": {
                "type": "string"
              }
            }
          }
        },
        {
          "method": "POST",
          "rel": "resetPassword",
          "mediaType": "application/vnd.hal+json",
          "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/jsuarezardid/resetPassword",
          "title": "Reset User Password"
        },
        {
          "method": "DELETE",
          "rel": "resetPassword",
          "mediaType": "application/vnd.hal+json",
          "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/jsuarezardid/resetPassword",
          "title": "Reset User Password"
        },
        {
          "method": "POST",
          "rel": "addToGroup",
          "mediaType": "application/vnd.hal+json",
          "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/jsuarezardid/addToGroup",
          "title": "Add User To Group",
          "schema": {
            "properties": {
              "groupName": {
                "type": "string"
              }
            },
            "required": [
              "groupName"
            ]
          }
        },
        {
          "method": "POST",
          "rel": "deleteFromGroup",
          "mediaType": "application/vnd.hal+json",
          "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/jsuarezardid/deleteFromGroup",
          "title": "Delete User From Group",
          "schema": {
            "properties": {
              "groupName": {
                "type": "string"
              }
            },
            "required": [
              "groupName"
            ]
          }
        }
      ]
    },
    "_links": {
      "self": {
        "name": "User",
        "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/jsuarezardid",
        "title": "User"
      },
      "userGroups": {
        "name": "Groups Collection",
        "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/groups?user=jsuarezardid",
        "title": "Groups Collection"
      }
    }
  };
  beforeEach(() => TestBed.configureTestingModule({

    imports: [
      HttpClientTestingModule
    ],
    providers: [
      HalResourceServiceFactoryProvider.createInstance(
        HalResourceService,
        apiURL,
        new HttpHeaders())
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
    service.executeHandler('update', { 'test': 'julio valeije' });
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

    expect(fetchStatus.getValue()).toEqual('done');
    service.executeHandler('update', { 'nickname': 'julio' });
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

    service.executeHandler('pepe', { 'nickname': 'julio' });
    expect(error.getValue()).toBeTruthy();
  });

  it('should retrieves an error in patch operation: propety patch exist but retrieves an error.', () => {

    httpMock = TestBed.get(HttpTestingController);
    const service: HalResourceService = TestBed.get(HalResourceService);

    const error = service.errorMessage;
    service.fetchResource();
    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyResponse);

    service.executeHandler('update', { 'nickname': 'julio' });
    httpMock.expectOne(apiURL).error(null,  {status: 404});
    expect(error.getValue()).toBeTruthy();
  });


  it('should retrieves response in patch operation: property patch exist and patch is done.', () => {

    httpMock = TestBed.get(HttpTestingController);
    const service: HalResourceService = TestBed.get(HalResourceService);

    const resource = service.resource;
    const fetchStatus = service.fetchStatus;
    const error = service.errorMessage;
    service.fetchResource();

    const req = httpMock.expectOne(apiURL);
    expect(req.request.method).toBe("GET");
    req.flush(dummyResponse);

    service.executeHandler('update', { 'nickname': 'julio' });
    expect(fetchStatus.getValue()).toEqual('patching');

    const reqPatch = httpMock.expectOne(apiURL);
    expect(reqPatch.request.method).toBe("PATCH");
    reqPatch.flush(dummyResponse);

    expect(fetchStatus.getValue()).toEqual('done');
    expect(resource.getValue()).toBeTruthy();
    expect(error.getValue()).toBeNull();
  });
});


describe('HalResourceService Collection', ()=> {
  const apiCollectionURL = 'http://localhost:9000/realms/us-west-2_WuzOKBp4o/users';
  let httpMockCollection: HttpTestingController;
  const dummycollectionResponse: any = {
    "_links": {
        "self": {
            "name": "Users Collection",
            "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users",
            "title": "Users Collection"
        },
        "item": [
            {
                "summary": {
                    "username": "jsuarezardid",
                    "status": "RESET_REQUIRED",
                    "enabled": true,
                    "created_date": "2020-05-20T17:47:18.914Z",
                    "last_modified_date": "2020-07-03T06:38:46.495Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/jsuarezardid",
                "title": "User"
            },
            {
                "summary": {
                    "username": "jsuarezgonz2",
                    "status": "CONFIRMED",
                    "enabled": true,
                    "created_date": "2020-06-16T14:25:06.139Z",
                    "last_modified_date": "2020-06-30T10:32:11.637Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/jsuarezgonz2",
                "title": "User"
            },
            {
                "summary": {
                    "username": "mgarcia232",
                    "status": "CONFIRMED",
                    "enabled": true,
                    "created_date": "2020-05-20T17:47:57.799Z",
                    "last_modified_date": "2020-05-22T12:38:55.118Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/mgarcia232",
                "title": "User"
            },
            {
                "summary": {
                    "username": "mparrilla",
                    "status": "CONFIRMED",
                    "enabled": true,
                    "created_date": "2020-06-18T06:54:01.722Z",
                    "last_modified_date": "2020-06-25T13:53:20.337Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/mparrilla",
                "title": "User"
            },
            {
                "summary": {
                    "username": "pbermejogarc",
                    "status": "CONFIRMED",
                    "enabled": true,
                    "created_date": "2020-05-20T17:49:21.556Z",
                    "last_modified_date": "2020-07-06T11:17:51.576Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/pbermejogarc",
                "title": "User"
            },
            {
                "summary": {
                    "username": "rarrojolopez",
                    "status": "CONFIRMED",
                    "enabled": true,
                    "created_date": "2020-05-22T12:38:49.425Z",
                    "last_modified_date": "2020-07-03T06:36:32.144Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/rarrojolopez",
                "title": "User"
            },
            {
                "summary": {
                    "username": "test4",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-26T07:00:21.675Z",
                    "last_modified_date": "2020-06-26T07:00:21.675Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/test4",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testjenkins",
                    "status": "CONFIRMED",
                    "enabled": true,
                    "created_date": "2020-06-16T16:01:51.264Z",
                    "last_modified_date": "2020-07-01T09:21:52.087Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testjenkins",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser10",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T09:53:48.330Z",
                    "last_modified_date": "2020-06-22T09:53:48.330Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser10",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser11",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T09:54:10.427Z",
                    "last_modified_date": "2020-06-22T09:54:10.427Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser11",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser12",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T09:54:41.827Z",
                    "last_modified_date": "2020-06-22T09:54:41.827Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser12",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser13",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T09:55:10.893Z",
                    "last_modified_date": "2020-06-22T09:55:10.893Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser13",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser14",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T10:03:25.542Z",
                    "last_modified_date": "2020-06-22T10:03:25.542Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser14",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser15",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T10:03:45.362Z",
                    "last_modified_date": "2020-06-22T10:03:45.362Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser15",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser16",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T10:04:05.446Z",
                    "last_modified_date": "2020-06-22T10:04:05.446Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser16",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser17",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T10:04:23.445Z",
                    "last_modified_date": "2020-06-22T10:04:23.445Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser17",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser18",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T10:04:47.722Z",
                    "last_modified_date": "2020-06-22T10:04:47.722Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser18",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser19",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T10:05:07.809Z",
                    "last_modified_date": "2020-06-22T10:05:07.809Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser19",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser1",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T09:14:04.528Z",
                    "last_modified_date": "2020-06-22T09:15:03.864Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser1",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser20",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T10:05:29.167Z",
                    "last_modified_date": "2020-06-22T10:05:29.167Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser20",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser21",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T10:05:50.810Z",
                    "last_modified_date": "2020-06-22T10:05:50.810Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser21",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser22",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T10:06:15.229Z",
                    "last_modified_date": "2020-06-22T10:06:15.229Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser22",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser23",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T10:08:42.174Z",
                    "last_modified_date": "2020-06-22T10:08:42.174Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser23",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser24",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T07:48:55.457Z",
                    "last_modified_date": "2020-06-23T07:48:55.457Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser24",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser25",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T07:49:20.494Z",
                    "last_modified_date": "2020-06-23T07:49:20.494Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser25",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser26",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T07:49:37.976Z",
                    "last_modified_date": "2020-06-23T07:49:37.976Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser26",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser27",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T07:49:55.866Z",
                    "last_modified_date": "2020-06-23T07:49:55.866Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser27",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser28",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T07:50:24.405Z",
                    "last_modified_date": "2020-06-23T07:50:24.405Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser28",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser29",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T07:50:44.877Z",
                    "last_modified_date": "2020-06-23T07:50:44.877Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser29",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser2",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T09:15:03.916Z",
                    "last_modified_date": "2020-06-22T09:15:03.916Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser2",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser30",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T07:51:07.708Z",
                    "last_modified_date": "2020-06-23T07:51:07.708Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser30",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser31",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T07:51:56.412Z",
                    "last_modified_date": "2020-06-23T07:51:56.412Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser31",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser32",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T07:52:16.232Z",
                    "last_modified_date": "2020-06-23T07:52:16.232Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser32",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser33",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T07:52:35.658Z",
                    "last_modified_date": "2020-06-23T07:52:35.658Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser33",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser34",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T08:11:21.810Z",
                    "last_modified_date": "2020-06-23T08:11:21.810Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser34",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser35",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T08:11:42.047Z",
                    "last_modified_date": "2020-06-23T08:11:42.047Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser35",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser36",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T08:12:00.843Z",
                    "last_modified_date": "2020-06-23T08:12:00.843Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser36",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser37",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T08:12:16.584Z",
                    "last_modified_date": "2020-06-23T08:12:16.584Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser37",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser38",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T08:12:33.910Z",
                    "last_modified_date": "2020-06-23T08:12:33.910Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser38",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser39",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T08:12:50.536Z",
                    "last_modified_date": "2020-06-23T08:12:50.536Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser39",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser3",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T09:15:39.405Z",
                    "last_modified_date": "2020-06-22T09:15:39.405Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser3",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser40",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T08:14:52.795Z",
                    "last_modified_date": "2020-06-23T08:14:52.795Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser40",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser41",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T08:15:32.140Z",
                    "last_modified_date": "2020-06-23T08:15:32.140Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser41",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser42",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T08:17:02.623Z",
                    "last_modified_date": "2020-06-23T08:17:02.623Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser42",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser43",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T08:17:18.950Z",
                    "last_modified_date": "2020-06-23T09:31:15.952Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser43",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser44",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:30:18.998Z",
                    "last_modified_date": "2020-06-23T09:30:18.998Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser44",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser45",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:31:15.992Z",
                    "last_modified_date": "2020-06-23T09:31:15.992Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser45",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser46",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:31:51.101Z",
                    "last_modified_date": "2020-06-23T09:31:51.101Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser46",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser47",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:32:07.960Z",
                    "last_modified_date": "2020-06-23T09:32:07.960Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser47",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser48",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:32:27.028Z",
                    "last_modified_date": "2020-06-23T09:32:27.028Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser48",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser49",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:32:51.770Z",
                    "last_modified_date": "2020-06-23T09:32:51.770Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser49",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser4",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-22T09:51:02.331Z",
                    "last_modified_date": "2020-06-22T09:51:02.331Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser4",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser50",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:33:15.271Z",
                    "last_modified_date": "2020-06-23T09:33:15.271Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser50",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser51",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:50:21.811Z",
                    "last_modified_date": "2020-06-23T09:50:21.811Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser51",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser52",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:33:53.298Z",
                    "last_modified_date": "2020-06-23T09:33:53.298Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser52",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser53",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:34:11.085Z",
                    "last_modified_date": "2020-06-23T09:34:11.085Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser53",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser54",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:49:13.515Z",
                    "last_modified_date": "2020-06-23T09:49:13.515Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser54",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser55",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:49:29.353Z",
                    "last_modified_date": "2020-06-23T09:49:29.353Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser55",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser56",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:49:44.414Z",
                    "last_modified_date": "2020-06-23T09:49:44.414Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser56",
                "title": "User"
            },
            {
                "summary": {
                    "username": "testuser57",
                    "status": "FORCE_CHANGE_PASSWORD",
                    "enabled": true,
                    "created_date": "2020-06-23T09:51:03.588Z",
                    "last_modified_date": "2020-06-23T09:51:03.588Z"
                },
                "name": "User",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users/testuser57",
                "title": "User"
            }
        ]
    },
    "_options": {
        "title": "Users Collection",
        "links": [
            {
                "method": "GET",
                "rel": "fetch",
                "mediaType": "application/vnd.hal+json",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users",
                "title": "Fetch Users Collection"
            },
            {
              "mediaType": "application/json",
              "method": "DELETE",
              "rel": "delete-user",
              "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users",
              "schema": {
                "type": "object",
                "properties": {
                  "user-id": {
                    "title": "user-id",
                    "type": "object",
                    "additionalProperties": true
                  }
                }
              },
              "title": "Delete an user for a given user id",
              "description": "Delete the user for a given user id"
            },
            {
                "method": "POST",
                "rel": "create",
                "mediaType": "application/vnd.hal+json",
                "href": "http://localhost:9000/realms/us-west-2_WuzOKBp4o/users",
                "title": "Create new User",
                "schema": {
                    "properties": {
                        "username": {
                            "type": "string"
                        },
                        "temporary_password": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "email_verified": {
                            "type": "boolean"
                        }
                    },
                    "required": [
                        "username"
                    ]
                }
            }
        ]
    }
};


  beforeEach(() => TestBed.configureTestingModule({

    imports: [
      HttpClientTestingModule
    ],
    providers: [
      HalResourceServiceFactoryProvider.createInstance(
        HalResourceService,
        apiCollectionURL,
        new HttpHeaders())
    ]
  })
  );

  it('should instanced a hal resource service', () => {
    const service: HalResourceService = TestBed.get(HalResourceService);
    expect(service).toBeTruthy();
  });

    it('should retrieves response in delete operation: delete exists and operations is done.',
    () => {

      httpMockCollection = TestBed.get(HttpTestingController);
      const service: HalResourceService = TestBed.get(HalResourceService);

      const resource = service.resource;
      const fetchStatus = service.fetchStatus;
      const error = service.errorMessage;
      service.fetchResource();

      const req = httpMockCollection.expectOne(apiCollectionURL);
      expect(req.request.method).toBe("GET");
      req.flush(dummycollectionResponse);

      service.executeHandler('delete-user');
      const reqDelete = httpMockCollection.expectOne(apiCollectionURL);
      reqDelete.flush(dummycollectionResponse);
      expect(reqDelete.request.method).toBe("DELETE");
      expect(fetchStatus.getValue()).toEqual('done');
      expect(resource.getValue()).toBeTruthy();
      expect(error.getValue()).toBeNull();
    });

    it('should retrieves an error response in delete operation: delete exists and operations retrieves an error.',
    () => {

      httpMockCollection = TestBed.get(HttpTestingController);
      const service: HalResourceService = TestBed.get(HalResourceService);

      const fetchStatus = service.fetchStatus;
      const error = service.errorMessage;
      service.fetchResource();

      const req = httpMockCollection.expectOne(apiCollectionURL);
      expect(req.request.method).toBe("GET");
      req.flush(dummycollectionResponse);


      service.executeHandler('delete-user');
      httpMockCollection.expectOne(apiCollectionURL).error(null,  {status: 404});
      expect(fetchStatus.getValue()).toEqual('done');
      expect(error.getValue()).toBeTruthy();
    });

    it('should retrieves response in post operation: post exists and operations is done.',
    () => {

      httpMockCollection = TestBed.get(HttpTestingController);
      const service: HalResourceService = TestBed.get(HalResourceService);

      const resource = service.resource;
      const fetchStatus = service.fetchStatus;
      const error = service.errorMessage;
      service.fetchResource();

      const req = httpMockCollection.expectOne(apiCollectionURL);
      expect(req.request.method).toBe("GET");
      req.flush(dummycollectionResponse);

      service.executeHandler('create', {});
      const reqPost = httpMockCollection.expectOne(apiCollectionURL);
      reqPost.flush(dummycollectionResponse);
      expect(reqPost.request.method).toBe("POST");
      expect(fetchStatus.getValue()).toEqual('done');
      expect(resource.getValue()).toBeTruthy();
      expect(error.getValue()).toBeNull();
    });


    it('should retrieves an error response in post operation: post exists and operation retrieves an error.',
    () => {

      httpMockCollection = TestBed.get(HttpTestingController);
      const service: HalResourceService = TestBed.get(HalResourceService);

      const fetchStatus = service.fetchStatus;
      const error = service.errorMessage;
      service.fetchResource();

      const req = httpMockCollection.expectOne(apiCollectionURL);
      expect(req.request.method).toBe("GET");
      req.flush(dummycollectionResponse);


      service.executeHandler('create', {});
      httpMockCollection.expectOne(apiCollectionURL).error(null,  {status: 404});
      expect(fetchStatus.getValue()).toEqual('done');
      expect(error.getValue()).toBeTruthy();
    });


    it('should retrieves an error response in get operation: get exists and operation retrieves an error.',
    () => {

      httpMockCollection = TestBed.get(HttpTestingController);
      const service: HalResourceService = TestBed.get(HalResourceService);

      const fetchStatus = service.fetchStatus;
      const error = service.errorMessage;
      service.fetchResource();

      const req = httpMockCollection.expectOne(apiCollectionURL);
      expect(req.request.method).toBe("GET");
      req.flush(dummycollectionResponse);


      service.executeHandler('fetch');
      httpMockCollection.expectOne(apiCollectionURL).error(null,  {status: 404});
      expect(fetchStatus.getValue()).toEqual('done');
      expect(error.getValue()).toBeTruthy();
    });
});

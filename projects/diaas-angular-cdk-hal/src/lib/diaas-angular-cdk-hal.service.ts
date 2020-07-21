import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { HalResource } from "@dxc-technology/halstack-client";

const fetchingStatus: string = "fetching";
const doneStatus: string = "done";
const patchingStatus: string = "patching";
const deleteStatus: string = "deleting";
const creatingStatus: string = "creating";

@Injectable()
export class HalResourceService {
  resource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  errorMessage: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  fetchStatus: BehaviorSubject<string> = new BehaviorSubject<string>(
    doneStatus
  );
  items: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  totalItems: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  constructor(
    public url: string,
    public headers: HttpHeaders,
    private httpClient: HttpClient) {
    }

  fetchResource() {
    this.fetchStatus.next(fetchingStatus);
    return this.httpClient.get(this.url, { headers: this.headers }).subscribe(
      resp => {
        const halResource = HalResource(Array.isArray(resp) ? resp[0] : resp);
        this.resource.next({ ...halResource });
        if (
          halResource.getLinks() !== null &&
          halResource.getLinks().length > 0
        ) {
          this.items.next(halResource.getItems());
          this.totalItems.next(
            halResource.resourceRepresentation._links._count
          );
        }

        this.fetchStatus.next(doneStatus);
        this.errorMessage.next(null);
      },
      err => {
        this.buildErrorResponse(err);
      }
    );
  }

  getCollectionHandlers() {
    if (
      this.resource.getValue().getLinks() !== null &&
      this.resource.getValue().getLinks().length > 0
    ) {
      return this.resource
        .getValue()
        .getLinks()
        .map(interaction => ({
          rel: interaction.rel,
          count: interaction._count,
          handler: () => {
            switch (interaction.rel) {
              case "next":
              case "first":
              case "prev":
              case "last":
                return this.handleGet({
                  url: interaction.href,
                  status: "navigating"
                });
              default:
                this.buildErrorResponse({
                  message: `Error. Operation  ${interaction.rel} is not known.`
                });
                break;
            }
          }
        }));
    }
  }

  executeItemsHandler(handlerName: string) {
    const pathHandler = this.getCollectionHandlers().find(
      x => x.rel == handlerName
    );
    if (pathHandler !== null && pathHandler !== undefined) {
      pathHandler.handler();
    } else {
      this.errorMessage.next("Operation does not exist in handlers.");
    }
  }

  getHandlers() {
    if (
      this.resource.getValue().getInteractions() != null &&
      this.resource.getValue().getInteractions().length > 0
    ) {
      return this.resource
        .getValue()
        .getInteractions()
        .map(interaction => ({
          rel: interaction.rel,
          handler: (body?: any, headers?: any) => {
            switch (interaction.method) {
              case "GET":
                return this.handleGet(body, headers);
              case "PATCH":
                if (this.existPropertiesSchema(interaction, body)) {
                  return this.handlePatch(body);
                } else {
                  this.buildErrorResponse({
                    message: `Error.Property ${Object.keys(
                      body
                    )} is not patcheable.`
                  });
                  break;
                }
              case "POST":
                if (this.existPropertiesSchema(interaction, body)) {
                  return this.handlePost(body);
                } else {
                  this.buildErrorResponse({
                    message: `Error.Property ${Object.keys(
                      body
                    )} is not creatable.`
                  });
                  break;
                }
              case "DELETE":
                return this.handleDelete(body);
              default:
                this.buildErrorResponse({
                  message: `Error. Operation  ${interaction.rel} is not known.`
                });
                break;
            }
          }
        }));
    }
  }

  getHandler(handlerName: string) {
    const pathHandler = this.getHandlers().find(x => x.rel == handlerName);
    return pathHandler !== undefined ? pathHandler : null;
  }

  executeHandler(handlerName: string, payload?: any, additionalHeaders?:any) {
    const pathHandler = this.getHandlers().find(x => x.rel == handlerName);
    if (pathHandler !== null && pathHandler !== undefined) {
      pathHandler.handler(payload, additionalHeaders);
    } else {
      this.errorMessage.next("Operation does not exist in handlers.");
    }
  }

  private handlePost(body: string) {
    this.fetchStatus.next(creatingStatus);
    return this.httpClient
      .post(this.url, body, { headers: this.headers })
      .subscribe(
        resp => {
          this.resource.next({
            ...HalResource(resp)
          });
          this.errorMessage.next(null);
          this.fetchStatus.next(doneStatus);
        },
        err => {
          this.buildErrorResponse(err);
        }
      );
  }

  public handleGet(body, headers?) {
    let finalHalUrl = this.url;
    if(body) {
      Object.keys(body)
      .map((key) =>
        finalHalUrl += !finalHalUrl.includes("?")
          ? `?${key}=${body[key]}`
          : `&${key}=${body[key]}`
      )
    }
    this.fetchStatus.next(fetchingStatus);
    return this.httpClient
      .get(finalHalUrl, { headers: headers ? headers : this.headers })
      .subscribe(
        resp => {
          const halResource = HalResource(resp);
          this.resource.next({
            ...halResource
          });
          if (
            halResource.getLinks() !== null &&
            halResource.getLinks().length > 0
          ) {
            this.items.next(halResource.getItems());
            this.totalItems.next(
              halResource.resourceRepresentation._links._count
            );
          }
          this.fetchStatus.next(doneStatus);
        },
        err => {
          this.buildErrorResponse(err);
        }
      );
  }

  private handlePatch(body: string) {
    this.fetchStatus.next(patchingStatus);
    return this.httpClient
      .patch(this.url, body, { headers: this.headers })
      .subscribe(
        resp => {
          this.resource.next({
            ...HalResource(resp)
          });
          this.errorMessage.next(null);
          this.fetchStatus.next(doneStatus);
        },
        err => {
          this.buildErrorResponse(err);
        }
      );
  }

  private handleDelete(body: string) {
    this.fetchStatus.next(deleteStatus);
    return this.httpClient
      .delete(this.url, { headers: this.headers })
      .subscribe(
        resp => {
          this.resource.next({
            ...HalResource(resp)
          });
          this.errorMessage.next(null);
          this.fetchStatus.next(doneStatus);
        },
        err => {
          this.buildErrorResponse(err);
        }
      );
  }

  public buildErrorResponse(err: any) {
    this.errorMessage.next(err.message);
    this.fetchStatus.next(null);
    this.fetchStatus.next(doneStatus);
  }

  private existPropertiesSchema(interaction, payload) {
    let valid = true;
    Object.keys(payload).forEach(element => {
      if (
        interaction.getSchemaProperty(element) === null ||
        interaction.getSchemaProperty(element) === undefined
      ) {
        valid = false;
      }
    });
    return valid;
  }

  // addPageParams(page: number, itemsPerPage: number) {
  //   let start = (page - 1) * itemsPerPage + 1;
  //   return (
  //     this.url +
  //     (this.url.includes("?") ? "&" : "?") +
  //     "_start=" +
  //     start +
  //     "&_num=" +
  //     itemsPerPage
  //   );
  // }

  // addSortParams(sort:string, page: number, itemsPerPage: number){
  //   return this.url + (this.url.includes("?") ? "&" : "?") + "_sort=" + sort  + "&_start=" + page + "&_num=" + itemsPerPage;
  // }
}

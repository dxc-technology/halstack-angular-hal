# Assure HAL Angular Components

Assure HAL angular Components is an npm library of reusable Angular components. It brings together two different responsibilities:

- Consuming Hal REST API's implementing following the [DXC API Guidelines](https://developer.dxc.com/apis)

- Rendering these API resources as UI components that are compliant with the [DXC UX Guidelines](https://developer.dxc.com/design/principles)

We have other libraries that will help you handling these responsibilities individually ([Halstack Client](https://github.com/dxc-technology/dxc-halstack-client)) / [Assure Angular CDK](https://github.dxc.com/DIaaS/diaas-angular-cdk) ). Assure HAL Angulara Components uses them under the hood, but it's a higher level abstraction that puts both responsibilities together using the most common association patterns.

For example, collection resources are often associated with tables, and there are a lot of semantics in the standards described by the DXC API guidelines for collections (sorting, paginating...) that could be associated with UI interactions (clicking a table header for sorting, clicking pages for paginating)

## Usage

Assure HAL Angular Components is distributed as an npm library. In order to use it in an existing project, you must install it first:

```
npm install @diaas/dxc-ngx-hal
```

The library provides the following components and hooks to be used in your React application:

Components

- [HalAutocomplete](#HalAutocompleteComponent)

- [HalTable](#HalTableComponent)

Service Facade

- [HalResourceService](#halresource-service)

## HalAutocompleteComponent

#### HalAutocomplete Usage

```TS
import { DxcAutocompleteHalModule, DxcAutocompleteHalComponent } from '@diaas/dxc-ngx-hal';

@NgModule({
  declarations: [
    DxcAutocompleteHalComponent
    ],
  imports: [
    ...
    DxcAutocompleteHalModule,
    ...
  ],
  providers: [
  ],
  entryComponents: [
  ]

```

#### HalAutocomplete Props

| Name                                                                                                                                                                                                                                                             | Default | Description                                                                                                                                                                                                                                                                                          |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| halUrl: `string`                                                                                                                                                                                                                                                    |         | The URL of the collection from which we will get a list of items that will contain the value we are looking for. `Required`                                                                                                                                                                          |
| headers: `Object`                                                                                                                                                                                                                                                |         | Contains the http headers to be sent along with the http requests to the collectionUrl. `Optional`                                                                                                                                                                                                   |
| asyncHeadersHandler: ()=>Observable<obj>                                                                                                                                                                                                                         |         | Async function that will be executed right before every http request in order to retrieve dynamic headers. It must return an observable that resolves into an object with the keys and values of the headers. These headers will be merged with the ones indicated in the `headers` prop. `Optional` |
| propertyName: `string`                                                                                                                                                                                                                                           |         | Name of the property to be used for filtering the data. `Required`                                                                                                                                                                                                                                   |
| rel: `string`                                                                                                                                                                                                                                                    |         | Name of the rel of the method that is going to be executed to receive the options for the autocomplete. `Required`                                                                                                                                                                                   |
| In addition to these component-specific properties you will also have all the properties of the Text field component that can be found on [its site](<http://design-system-angular-cdk-site.s3-website.us-east-2.amazonaws.com/#/components/(components:input)>) |         |                                                                                                                                                                                                                                                                                                      |

#### HalAutocomplete Example

##### ts

```
@Component({
  selector: 'app-autocomplete-hal',
  templateUrl: './autocomplete-hal.component.html',
  styleUrls: ['./autocomplete-hal.component.scss']
})
export class AutocompleteHalComponent implements OnInit {

  autocompleteUrl = 'http://...';
  }

}
```

##### html

```JSX
  <dxc-autocomplete-hal
    label="HalAutocomplete example"
    [halUrl]="autocompleteUrl"
    propertyName="prospect-full-name"
  ></dxc-autocomplete-hal>
```

## HalTableComponent

#### Hal Table Usage

```TS
import { DxcHalTableModule, DxcHalTableComponent } from '@diaas/dxc-ngx-hal';

@NgModule({
  declarations: [
    DxcTableComponent
    ],
  imports: [
    ...
    DxcTableModule,
    ...
  ],
  providers: [
  ],
  entryComponents: [
  ]

```

#### Hal Table Props

| Name                   | Default | Description                                                                                                                                                                     |
| :--------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| colletionUrl: `string` |         | The URL of the collection resource to be used for the table. `Required`                                                                                                         |
| headers: `Object`      |         | Contains the http headers to be sent along with the http requests to the collectionUrl. `Optional`                                                                              |
| itemsPerPage: `number` | 5       | The amount of items to be displayed per page. Will be used to calculate the `_start` and `_num` query parameters that will be sent to the collection for pagination. `Optional` |

#### HAL Table Example

##### ts

```
@Component({
  selector: 'app-hal-table-page',
  templateUrl: './hal-table-page.component.html',
  styleUrls: ['./hal-table-page.component.scss']
})
export class HalTablePageComponent  {

  displayedColumns =
    {
        columns: ["prospect-update-user",
                  "prospect-birthdate",
                  "prospect-email"],
        labels: ['PROSPECT', 'BIRTHDATE', 'EMAIL']
    };

  constructor() {
  }
```

##### html

As you know, angular provides a view component which is more o less similar to dom element.
In this view component, angular provides a container element and in this hal table component is
going to be defined inside as a column of the dxc hal table.
These columns has the property name defined in the dxcColumnDef directive in the ng-container component.

Inside of each column container, in a td html element has to be defined the element variable to reach the item value of a hal resource element as it's seen in the next example \*dxcCellDef="let item"

```JSX
      <dxc-hal-table  collectionUrl="https://..." itemsPerPage="10">
        <ng-container  dxcColumnDef="User">
            <td *dxcCellDef="let item">
              <dxc-button [label]="item['prospect-update-user']"></dxc-button>
            </td>
        </ng-container>

        <ng-container dxcColumnDef="Date">
          <td *dxcCellDef="let element">
            <dxc-tag [label]="element['prospect-birthdate']"></dxc-tag>
          </td>
        </ng-container>

        <ng-container dxcColumnDef="Email">
          <td *dxcCellDef="let element"> {{element['prospect-email']}} </td>
        </ng-container>
      </dxc-hal-table>
```

## halresource-service

#### halresource-service Usage

```
import { HalResourceService } from from '@diaas/dxc-ngx-hal'

```

#### halresource-service Parameters

| Name                    | Default | Description                                                                                                         |
| :---------------------- | :------ | :------------------------------------------------------------------------------------------------------------------ |
| url: `string`           |         | The URL of the resource. `Required`                                                                                 |
| headers: `HttpHeaders,` |         | Contains the http headers to be sent long with the http requests to the url indicated in the `url` prop. `Optional` |

#### halresource-service reactive programming usage

the object facade service class has the following properties:

| Name                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| resource: `BehaviorSubject<any>`                                                         | A [Halstack Client's HalResource](https://github.com/dxc-technology/dxc-halstack-client#halresource-object) instance of the resource behind the `url` parameter.<ul><li> It will be `null` until the resource is fetched.</li><li> It will be automatically refreshed if the execution of an interaction handler responds with an instance of the same resource.</li></ul>                                                                                                             |
| fetchStatus: `'idle'` \| `'fetching'` \| `'resolved'` \| `'rejected'` \| `'interaction'` | The status of the http request to the `url` parameter.<ul><li> `'idle'` before the request is triggered</li><li> `'fetching'` after the request is triggered and the before we get a response.</li><li> `'resolved'` after getting a successful response. Only if it contains a HAL resource.</li><li> `'rejected'` after getting an error response. Or if response doesn't contain a HAL resource.</li><li> `'interaction'` during the execution of an interaction handler.</li></ul> |

| requestError: `string` | The error message in case the request gets rejected. It will be `null` before getting the response or if the response is successful and contains a HAL resource.|

| getCollectionHandlers: `Function` This is a function containing all collection interactions (\_options.links) are available in the HAL collection resource. Each entry has the rel of the interaction as a key, and is a function that you can execute passing a payload as a parameter. Executing one of these functions will: <ul><li>Make the http request associated to the given interaction.</li></ul>

| getHandlers: `Function` | This is a function containing interactions (\_options.links) are available in the HAL resource. Each entry has the rel of the interaction as a key, and is a function that you can execute passing a payload as a parameter. Executing one of these functions will: <ul><li>Make the http request associated to the given interaction.</li></ul>

#### halresource-service example

```JSX

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

```

## Contributing

Before opening new issues or pull requests, please refer to [CONTRIBUTING.MD](https://github.dxc.com/DIaaS/diaas-angular-cdk-hal/blob/master/CONTRIBUTING.md).

## Development Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

The project is divided in two main folders. One is for the actual library, and the other one is a React application using the library.

### Library

Contained in the `lib` folder.

```bash
cd lib
```

Install the library dependencies.

```bash
npm install
```

Run the build process into `dist` folder, detecting and automatically building changes in src.

```bash
npm run build:watch # or 'npm run build' if there is no need to watch for changes
```

### Example Application

Contained in the `app` folder.

```bash
cd app # from the root folder
```

Install the application dependencies. The Assure React CDK dependency is linked to the local `lib` folder. This one must have been previously built.

```bash
npm install
```

Start the application.

```bash
ng serve
```

Now, anytime you make a change to the library or the app, `angular cli` will live-reload your local dev server so you can iterate on your component in real-time.

## Running the tests

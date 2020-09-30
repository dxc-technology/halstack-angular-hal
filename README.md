# Assure HAL Angular Components

Assure HAL angular Components is an npm library of reusable Angular components. It brings together two different responsibilities:

- Consuming Hal REST API's implementing following the [DXC API Guidelines](https://developer.dxc.com/apis)

- Rendering these API resources as UI components that are compliant with the [DXC UX Guidelines](https://developer.dxc.com/design/principles)

We have other libraries that will help you handling these responsibilities individually ([Halstack Client](https://github.com/dxc-technology/dxc-halstack-client) / [Assure Angular CDK](https://github.com/dxc-technology/halstack-angular/) ). Assure HAL Angular Components uses them under the hood, but it's a higher level abstraction that puts both responsibilities together using the most common association patterns.

For example, collection resources are often associated with tables, and there are a lot of semantics in the standards described by the DXC API guidelines for collections (sorting, paginating...) that could be associated with UI interactions (clicking a table header for sorting, clicking pages for paginating)

## Usage

Assure HAL Angular Components is distributed as an npm library. In order to use it in an existing project, you must install it first:

```
npm install @dxc-technology/halstack-angular-hal
```

The library provides the following components and functions to be used in your Angular application:

Components

- [HAL Autocomplete](#HalAutocompleteComponent)

- [HAL Table](#HalTableComponent)

Service Facade

- [HAL Resource Service](#halresource-service)

## HAL Autocomplete Component

### HAL Autocomplete Usage

```TS
import { DxcAutocompleteHalModule, DxcAutocompleteHalComponent } from '@dxc-technology/halstack-angular-hal';

@NgModule({
  declarations: [
    DxcAutocompleteHalComponent
  ],
  imports: [
    DxcAutocompleteHalModule
  ],
  providers: [],
  entryComponents: []

```

### HAL Autocomplete Props

| Name                                                                                                                                                                                                                   | Default | Description                                                                                                                                                                                                                                                                                          |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| halUrl: `string`                                                                                                                                                                                                       |         | The URL of the collection from which we will get a list of items that will contain the value we are looking for. `Required`                                                                                                                                                                          |
| headers: `Object`                                                                                                                                                                                                      |         | Contains the http headers to be sent along with the http requests to the collectionUrl. `Optional`                                                                                                                                                                                                   |
| asyncHeadersHandler: ()=>Observable<obj>                                                                                                                                                                               |         | Async function that will be executed right before every http request in order to retrieve dynamic headers. It must return an observable that resolves into an object with the keys and values of the headers. These headers will be merged with the ones indicated in the `headers` prop. `Optional` |
| propertyName: `string`                                                                                                                                                                                                 |         | Name of the property to be used for filtering the data. `Required`                                                                                                                                                                                                                                   |
| rel: `string`                                                                                                                                                                                                          |         | Name of the rel of the method that is going to be executed to receive the options for the autocomplete. `Required`                                                                                                                                                                                   |
| In addition to these component-specific properties you will also have all the properties of the Text field component that can be found on [its site](https://developer.dxc.com/tools/angular/next/#/components/input). |         |                                                                                                                                                                                                                                                                                                      |

### HAL Autocomplete Example

#### HTML file

```html
<dxc-autocomplete-hal
  label="HalAutocomplete example"
  halUrl="http://..."
  propertyName="prospect-full-name"
></dxc-autocomplete-hal>
```

## HAL Table Component

### HAL Table Usage

```TS
import { DxcHalTableModule, DxcHalTableComponent } from '@dxc-technology/halstack-angular-hal';

@NgModule({
  declarations: [
    DxcTableComponent
  ],
  imports: [
    DxcTableModule
  ],
  providers: [],
  entryComponents: []

```

### HAL Table Props

| Name                   | Default | Description                                                                                                                                                                     |
| :--------------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| halUrl: `string`       |         | The URL of the collection resource to be used for the table. `Required`                                                                                                         |
| headers: `Object`      |         | Contains the http headers to be sent along with the http requests to the collectionUrl. `Optional`                                                                              |
| itemsPerPage: `number` | 5       | The amount of items to be displayed per page. Will be used to calculate the `_start` and `_num` query parameters that will be sent to the collection for pagination. `Optional` |

### HAL Table Directives

Directives are used to add functionality and new syntax into HTML components. The following directives are customized and you can use them on this component.

| Name                           | Default                                                    | Description                                                                                                                                                                                                                                           |
| :----------------------------- | :--------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dxcColumnDef: `string`         |                                                            | Column definition. `Required`                                                                                                                                                                                                                         |
| dxcCellDef: `Iterable<string>` |                                                            | Cell definition. It selects the value from the array. `Required`                                                                                                                                                                                      |
| sortable: `Object`             | <ul><li>isSortable:false</li><li>propertyName:''</li></ul> | An array of objects representing if the column is going to be sorted and the key value. <ul><li><b>isSortable</b>: boolean value if it is sorteable.</li><li><b>propertyName</b>: string with the key from the array of objects.</li></ul> `Optional` |

### HAL Table Example

#### HTML file

As you know, angular provides a view component which is more o less similar to dom element.
In this view component, angular provides a container element and in this hal table component is
going to be defined inside as a column of the dxc hal table.
These columns has the property name defined in the dxcColumnDef directive in the ng-container component.

Inside of each column container, in a td html element has to be defined the element variable to reach the item value of a hal resource element as it's seen in the next example \*dxcCellDef="let item"

```html
<dxc-hal-table halUrl="http://..." headers="" itemsPerPage="4">
  <ng-container
    dxcColumnDef="User"
    [sortable]="{ isSortable: true, propertyName: 'prospect-full-name' }"
  >
    <td *dxcCellDef="let item">
      <dxc-button [label]="item['prospect-full-name']"> </dxc-button>
    </td>
  </ng-container>

  <ng-container
    dxcColumnDef="Date"
    [sortable]="{ isSortable: true, propertyName: 'prospect-update-date' }"
  >
    <td *dxcCellDef="let element">
      <dxc-tag [label]="element['prospect-update-date']"> </dxc-tag>
    </td>
  </ng-container>

  <ng-container dxcColumnDef="Email">
    <td *dxcCellDef="let element">{{ element["prospect-distributor-id"] }}</td>
  </ng-container>
</dxc-hal-table>
```

## HAL Resource Service

### HAL Resource Service Usage

```ts
import { HalResourceService } from from '@dxc-technology/halstack-angular-hal'

```

### HAL Resource Service Parameters

| Name                    | Default | Description                                                                                                         |
| :---------------------- | :------ | :------------------------------------------------------------------------------------------------------------------ |
| url: `string`           |         | The URL of the resource. `Required`                                                                                 |
| headers: `HttpHeaders` |         | Contains the http headers to be sent long with the http requests to the url indicated in the `url` prop. `Optional` |

### Reactive Programming Usage

The object facade service class has the following properties:

| Name                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| resource: `BehaviorSubject<any>`                                                         | A [Halstack Client's HalResource](https://github.com/dxc-technology/dxc-halstack-client#halresource-object) instance of the resource behind the `url` parameter.<ul><li> It will be `null` until the resource is fetched.</li><li> It will be automatically refreshed if the execution of an interaction handler responds with an instance of the same resource.</li></ul>                                                                                                             |
| items: `BehaviorSubject<any>` | Items returned by the URL parameter.  |
| totalItems: `BehaviorSubject<number>` | Total number of items.  |
| fetchStatus: `'idle'` \| `'fetching'` \| `'resolved'` \| `'rejected'` \| `'interaction'` | The status of the http request to the `url` parameter.<ul><li> `'idle'` before the request is triggered</li><li> `'fetching'` after the request is triggered and the before we get a response.</li><li> `'resolved'` after getting a successful response. Only if it contains a HAL resource.</li><li> `'rejected'` after getting an error response. Or if response doesn't contain a HAL resource.</li><li> `'interaction'` during the execution of an interaction handler.</li></ul> |
| requestError: `string` | The error message in case the request gets rejected. It will be `null` before getting the response or if the response is successful and contains a HAL resource.|
| getCollectionHandlers: `Function` | This is a function containing all collection interactions (\_options.links) are available in the HAL collection resource. Each entry has the rel of the interaction as a key. Executing one of these functions will: <ul><li>Make the http request associated to the given interaction.</li></ul>
| getHandlers: `Function` | This is a function containing interactions (\_options.links) are available in the HAL resource. Each entry has the rel of the interaction as a key. Executing one of these functions will: <ul><li>Make the http request associated to the given interaction.</li></ul>|
| fetchResource: `Function` | This is the main function to fetch for items using the injected instance and the given URL. It can have a body parameter which is an object containing query params for the URL. |
| executeItemsHandler: `Function` | This is a function used when the resource is a collection. It needs the rel of the iteration as handlerName parameter.|
| getHandler: `Function` |  This is a function used when the resource is not a collection.  It needs the rel of the iteration as handlerName parameter. |
| executeHandler: `Function` | This is a function used when the resource is not a collection. Besides, you can execute it passing a payload or additionals headers as parameters.|
| 

### Example

```js
@Component({
  selector: 'app',
  templateUrl: './app-component.component.html',
  styleUrls: ['./app-component.component.scss']
})
export class AppComponent implements OnInit {

  halUrl = "http://...";
  headers = "";

  collectionResource: HalResourceService;

  totalItems;
  items;
  fetchStatus;
  error;
  resource;

  page: number = 1;
  itemsPerPage: number = 5;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.collectionResource = new HalResourceService(
      this.halUrl,
      new HttpHeaders(this.headers),
      this.httpClient
    );

    this.collectionResource.fetchResource({
      _start: this.page,
      _num: this.itemsPerPage
    });

    this.resource = this.collectionResource.resource;
    this.fetchStatus = this.collectionResource.fetchStatus;
    this.error = this.collectionResource.errorMessage;
    this.items = this.collectionResource.items;
    this.totalItems = this.collectionResource.totalItems;
  }
}
```

## Contributing

Before opening new issues or pull requests, please refer to [CONTRIBUTING.MD](https://github.com/dxc-technology/halstack-angular-hal/blob/master/CONTRIBUTING.md).

## Development Setup

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

The project is divided in two main folders. One is for the actual library, and the other is an Angular application using the library.

### Library

Contained in the `diaas-angular-cdk-hal` folder.

```bash
cd projects\diaas-angular-cdk-hal
```

Install the library dependencies.

```bash
npm install
```

Run the build process into `dist` folder, detecting and automatically building changes in src.

```bash
npm run build-lib:watch
```

Or if there is no need to watch for changes, run the build process and pack it to generate the library.

```bash
npm run generate-lib
```

### Example Application

Contained in the `cdk-hal-examples` folder, but it can be run from the root of the repository.

```bash
cd halstack-angular-hal
```

Install the application dependencies. The Assure HAL Angular CDK dependency is linked to the local `diaas-angular-cdk-hal` folder. This one must have been previously built.

```bash
npm install
```

Start the application.

```bash
npm run start
```

To be able to see data on these components, a server should be run. It is used [json-server](https://www.npmjs.com/package/json-server) for this purpose so it must be installed.

Once it is done, go to `db` folder and execute the server.

```bash
cd db
node server.js
```

If you are watching for changes, anytime you make a change to the library or the app, `angular cli` will live-reload your local dev server so you can iterate on your component in real-time.

## Running the tests
Run tests of the library with JEST.

```bash
cd projects\diaas-angular-cdk-hal
npm run test
```
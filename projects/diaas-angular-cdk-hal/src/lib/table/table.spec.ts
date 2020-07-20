import { render, waitForElement } from '@testing-library/angular';
import { screen, fireEvent } from "@testing-library/dom";
import { DxcHalTable } from './table';
import { DxcHalTableModule } from './table-module';
import data from "./mocks/tableResponseMock";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';

describe('Hal table', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

  });

  afterEach(() => {
    httpMock.verify();
  });

  test('should render dxc-hal-table', async () =>{
    const array = JSON.parse(JSON.stringify(data));
    const hal = await render(DxcHalTable, {
      template:`  <dxc-hal-table halUrl="http://localhost:3000/data" [headers]="" [itemsPerPage]="4">
                      <ng-container dxcColumnDef="User" [sortable]="{isSortable:true, propertyName:'prospect-full-name'}">
                          <td *dxcCellDef="let item"> {{item["prospect-full-name"]}} </td>
                      </ng-container>
                      <ng-container dxcColumnDef="Email">
                          <td *dxcCellDef="let item"> {{item["prospect-distributor-id"]}} </td>
                      </ng-container>
                  </dxc-hal-table>`,
     imports: [DxcHalTableModule, HttpClientTestingModule],
     excludeComponentDeclaration: true
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    const req = httpMock.expectOne(`http://localhost:3000/data?_start=1&_num=4`);
    expect(req.request.method).toBe('GET');

    req.flush(calculatePagination(1,4,array));

    await waitForElement(() => hal.getByText(/Loading/i));
    await waitForElement(() => hal.getByRole("table"));
    const table = hal.getByRole("table");
    expect(table).toBeTruthy();
    hal.detectChanges();
    expect(screen.getByText("BOCJT FJUUZ")).toBeTruthy();
    expect(screen.getByText("XIFYZ OROKQ")).toBeTruthy();
    expect(screen.getByText("UOPSC CFRHV")).toBeTruthy();
    expect(screen.getByText("RBGMX SAWLZ")).toBeTruthy();
  });

  test('should show data from next page', async () =>{
    let array = JSON.parse(JSON.stringify(data));
    const hal = await render(DxcHalTable, {
      template:`  <dxc-hal-table halUrl="http://localhost:3000/data" [headers]="" [itemsPerPage]="4">
                      <ng-container dxcColumnDef="User" [sortable]="{isSortable:true, propertyName:'prospect-full-name'}">
                          <td *dxcCellDef="let item"> {{item["prospect-full-name"]}} </td>
                      </ng-container>
                      <ng-container dxcColumnDef="Email">
                          <td *dxcCellDef="let item"> {{item["prospect-distributor-id"]}} </td>
                      </ng-container>
                  </dxc-hal-table>`,
     imports: [DxcHalTableModule, HttpClientTestingModule],
     excludeComponentDeclaration: true
  });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    let req = httpMock.expectOne(`http://localhost:3000/data?_start=1&_num=4`);
    expect(req.request.method).toBe('GET');

    req.flush(calculatePagination(1,4,array));

    await waitForElement(() => hal.getByText(/Loading/i));
    await waitForElement(() => hal.getByRole("table"));
    const table = hal.getByRole("table");
    expect(table).toBeTruthy();
    hal.detectChanges();
    expect(await screen.getByText("BOCJT FJUUZ")).toBeTruthy();
    expect(await screen.getByText("XIFYZ OROKQ")).toBeTruthy();
    expect(await screen.getByText("UOPSC CFRHV")).toBeTruthy();
    expect(await screen.getByText("RBGMX SAWLZ")).toBeTruthy();

    const nextButton = hal.getAllByRole("button")[2];
    fireEvent.click(nextButton);
    hal.detectChanges();

    req = httpMock.expectOne(`http://localhost:3000/data?_start=2&_num=4`);
    expect(req.request.method).toBe('GET');

    array = JSON.parse(JSON.stringify(data));
    req.flush(calculatePagination(2,4,array));
    hal.detectChanges();

    expect(hal.getByText("5 to 6 of 6")).toBeTruthy();
    expect(hal.getByText("Page: 2 of 2")).toBeTruthy();
    expect(hal.getByText("THISG ZDZOC")).toBeTruthy();
    expect(hal.getByText("AAAA BBBB")).toBeTruthy();
  });

  test('should show data from last page', async () =>{
    let array = JSON.parse(JSON.stringify(data));
    const hal = await render(DxcHalTable, {
      template:`  <dxc-hal-table halUrl="http://localhost:3000/data" [headers]="" [itemsPerPage]="2">
                      <ng-container dxcColumnDef="User" [sortable]="{isSortable:true, propertyName:'prospect-full-name'}">
                          <td *dxcCellDef="let item"> {{item["prospect-full-name"]}} </td>
                      </ng-container>
                      <ng-container dxcColumnDef="Email">
                          <td *dxcCellDef="let item"> {{item["prospect-distributor-id"]}} </td>
                      </ng-container>
                  </dxc-hal-table>`,
     imports: [DxcHalTableModule, HttpClientTestingModule],
     excludeComponentDeclaration: true
  });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    let req = httpMock.expectOne(`http://localhost:3000/data?_start=1&_num=2`);
    expect(req.request.method).toBe('GET');

    req.flush(calculatePagination(1,2,array));

    await waitForElement(() => hal.getByText(/Loading/i));
    await waitForElement(() => hal.getByRole("table"));
    const table = hal.getByRole("table");
    expect(table).toBeTruthy();
    hal.detectChanges();
    expect(await screen.getByText("BOCJT FJUUZ")).toBeTruthy();
    expect(await screen.getByText("XIFYZ OROKQ")).toBeTruthy();

    const lastButton = hal.getAllByRole("button")[3];
    fireEvent.click(lastButton);
    hal.detectChanges();

    req = httpMock.expectOne(`http://localhost:3000/data?_start=3&_num=2`);
    expect(req.request.method).toBe('GET');

    array = JSON.parse(JSON.stringify(data));
    req.flush(calculatePagination(3,2,array));

    hal.detectChanges();

    expect(hal.getByText("5 to 6 of 6")).toBeTruthy();
    expect(hal.getByText("Page: 3 of 3")).toBeTruthy();
    expect(hal.getByText("THISG ZDZOC")).toBeTruthy();
    expect(hal.getByText("AAAA BBBB")).toBeTruthy();
  });

  test('should show data from previous page', async () =>{
    let array = JSON.parse(JSON.stringify(data));
    const hal = await render(DxcHalTable, {
      template:`  <dxc-hal-table halUrl="http://localhost:3000/data" [headers]="" [itemsPerPage]="2">
                      <ng-container dxcColumnDef="User" [sortable]="{isSortable:true, propertyName:'prospect-full-name'}">
                          <td *dxcCellDef="let item"> {{item["prospect-full-name"]}} </td>
                      </ng-container>
                      <ng-container dxcColumnDef="Email">
                          <td *dxcCellDef="let item"> {{item["prospect-distributor-id"]}} </td>
                      </ng-container>
                  </dxc-hal-table>`,
     imports: [DxcHalTableModule, HttpClientTestingModule],
     excludeComponentDeclaration: true
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    let req = httpMock.expectOne(`http://localhost:3000/data?_start=1&_num=2`);
    expect(req.request.method).toBe('GET');

    req.flush(calculatePagination(1,2,array));

    await waitForElement(() => hal.getByText(/Loading/i));
    await waitForElement(() => hal.getByRole("table"));
    const table = hal.getByRole("table");
    expect(table).toBeTruthy();
    hal.detectChanges();
    expect(await screen.getByText("XIFYZ OROKQ")).toBeTruthy();
    expect(await screen.getByText("BOCJT FJUUZ")).toBeTruthy();

    const lastButton = hal.getAllByRole("button")[3];
    fireEvent.click(lastButton);
    hal.detectChanges();

    req = httpMock.expectOne(`http://localhost:3000/data?_start=3&_num=2`);
    expect(req.request.method).toBe('GET');

    array = JSON.parse(JSON.stringify(data));
    req.flush(calculatePagination(3,2,array));

    const previousButton = hal.getAllByRole("button")[1];
    fireEvent.click(previousButton);
    hal.detectChanges();

    req = httpMock.expectOne(`http://localhost:3000/data?_start=2&_num=2`);
    expect(req.request.method).toBe('GET');

    array = JSON.parse(JSON.stringify(data));
    req.flush(calculatePagination(2,2,array));

    hal.detectChanges();

    expect(hal.getByText("3 to 4 of 6")).toBeTruthy();
    expect(hal.getByText("Page: 2 of 3")).toBeTruthy();
    expect(hal.getByText("UOPSC CFRHV")).toBeTruthy();
    expect(hal.getByText("RBGMX SAWLZ")).toBeTruthy();

  });

  test('should show data from first page', async () =>{
    let array = JSON.parse(JSON.stringify(data));
    const hal = await render(DxcHalTable, {
      template:`  <dxc-hal-table halUrl="http://localhost:3000/data" [headers]="" [itemsPerPage]="2">
                      <ng-container dxcColumnDef="User" [sortable]="{isSortable:true, propertyName:'prospect-full-name'}">
                          <td *dxcCellDef="let item"> {{item["prospect-full-name"]}} </td>
                      </ng-container>
                      <ng-container dxcColumnDef="Email">
                          <td *dxcCellDef="let item"> {{item["prospect-distributor-id"]}} </td>
                      </ng-container>
                  </dxc-hal-table>`,
     imports: [DxcHalTableModule, HttpClientTestingModule],
     excludeComponentDeclaration: true
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    let req = httpMock.expectOne(`http://localhost:3000/data?_start=1&_num=2`);
    expect(req.request.method).toBe('GET');

    req.flush(calculatePagination(1,2,array));

    await waitForElement(() => hal.getByText(/Loading/i));
    await waitForElement(() => hal.getByRole("table"));
    const table = hal.getByRole("table");
    expect(table).toBeTruthy();
    hal.detectChanges();
    expect(await screen.getByText("XIFYZ OROKQ")).toBeTruthy();
    expect(await screen.getByText("BOCJT FJUUZ")).toBeTruthy();

    const lastButton = hal.getAllByRole("button")[3];
    fireEvent.click(lastButton);
    hal.detectChanges();

    req = httpMock.expectOne(`http://localhost:3000/data?_start=3&_num=2`);
    expect(req.request.method).toBe('GET');

    array = JSON.parse(JSON.stringify(data));
    req.flush(calculatePagination(3,2,array));

    const firstButton = hal.getAllByRole("button")[0];
    fireEvent.click(firstButton);
    hal.detectChanges();

    req = httpMock.expectOne(`http://localhost:3000/data?_start=1&_num=2`);
    expect(req.request.method).toBe('GET');

    array = JSON.parse(JSON.stringify(data));
    req.flush(calculatePagination(1,2,array));

    hal.detectChanges();

    expect(hal.getByText("1 to 2 of 6")).toBeTruthy();
    expect(hal.getByText("Page: 1 of 3")).toBeTruthy();
    expect(hal.getByText("BOCJT FJUUZ")).toBeTruthy();
    expect(hal.getByText("XIFYZ OROKQ")).toBeTruthy();

  });

  test('should sort data by column', async () =>{
    let array = JSON.parse(JSON.stringify(data));
    const hal = await render(DxcHalTable, {
      template:`  <dxc-hal-table halUrl="http://localhost:3000/data" [headers]="" [itemsPerPage]="4">
                      <ng-container dxcColumnDef="User" [sortable]="{isSortable:true, propertyName:'prospect-full-name'}">
                          <td *dxcCellDef="let item"> {{item["prospect-full-name"]}} </td>
                      </ng-container>
                      <ng-container dxcColumnDef="Email">
                          <td *dxcCellDef="let item"> {{item["prospect-distributor-id"]}} </td>
                      </ng-container>
                  </dxc-hal-table>`,
     imports: [DxcHalTableModule, HttpClientTestingModule],
     excludeComponentDeclaration: true
  });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);

    let req = httpMock.expectOne(`http://localhost:3000/data?_start=1&_num=4`);
    expect(req.request.method).toBe('GET');

    req.flush(calculatePagination(1,4,array));

    await waitForElement(() => hal.getByText(/Loading/i));
    await waitForElement(() => hal.getByRole("table"));
    const table = hal.getByRole("table");
    expect(table).toBeTruthy();
    hal.detectChanges();
    expect(await screen.getByText("BOCJT FJUUZ")).toBeTruthy();
    expect(await screen.getByText("XIFYZ OROKQ")).toBeTruthy();
    expect(await screen.getByText("UOPSC CFRHV")).toBeTruthy();
    expect(await screen.getByText("RBGMX SAWLZ")).toBeTruthy();

    const sortHeader = hal.getByText("User");
    fireEvent.click(sortHeader);
    hal.detectChanges();

    array = JSON.parse(JSON.stringify(data));
    req = httpMock.expectOne(`http://localhost:3000/data?_start=1&_num=4&_sort=prospect-full-name`);
    expect(req.request.method).toBe('GET');
    array._links.item = await array._links.item.sort(sortArray("prospect-full-name","asc"));
    req.flush(array);
    hal.detectChanges();
    req = httpMock.expectOne(`http://localhost:3000/data?_start=1&_num=4`);
    expect(req.request.method).toBe('GET');
    hal.detectChanges();
    req.flush(await calculatePagination(1,4,array));
    hal.detectChanges();

    expect(await screen.getByText("AAAA BBBB")).toBeTruthy();
    expect(await screen.getByText("BOCJT FJUUZ")).toBeTruthy();
    expect(await screen.getByText("RBGMX SAWLZ")).toBeTruthy();
    expect(await screen.getByText("THISG ZDZOC")).toBeTruthy();
  });

  test('should not sort data that is not sortable', async () =>{
    let array = JSON.parse(JSON.stringify(data));
    const hal = await render(DxcHalTable, {
      template:`  <dxc-hal-table halUrl="http://localhost:3000/data" [headers]="" [itemsPerPage]="4">
                      <ng-container dxcColumnDef="User" [sortable]="{isSortable:true, propertyName:'prospect-full-name'}">
                          <td *dxcCellDef="let item"> {{item["prospect-full-name"]}} </td>
                      </ng-container>
                      <ng-container dxcColumnDef="Email">
                          <td *dxcCellDef="let item"> {{item["prospect-distributor-id"]}} </td>
                      </ng-container>
                  </dxc-hal-table>`,
     imports: [DxcHalTableModule, HttpClientTestingModule],
     excludeComponentDeclaration: true
  });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);

    let req = httpMock.expectOne(`http://localhost:3000/data?_start=1&_num=4`);
    expect(req.request.method).toBe('GET');

    req.flush(calculatePagination(1,4,array));

    await waitForElement(() => hal.getByText(/Loading/i));
    await waitForElement(() => hal.getByRole("table"));
    const table = hal.getByRole("table");
    expect(table).toBeTruthy();
    hal.detectChanges();
    expect(await screen.getByText("BOCJT FJUUZ")).toBeTruthy();
    expect(await screen.getByText("XIFYZ OROKQ")).toBeTruthy();
    expect(await screen.getByText("UOPSC CFRHV")).toBeTruthy();
    expect(await screen.getByText("RBGMX SAWLZ")).toBeTruthy();

    const sortHeader = hal.getByText("Email");
    fireEvent.click(sortHeader);
    hal.detectChanges();

    httpMock.expectNone(`http://localhost:3000/data?_start=1&_num=4&_sort=prospect-distributor-id`);

    hal.detectChanges();

    expect(await screen.getByText("BOCJT FJUUZ")).toBeTruthy();
    expect(await screen.getByText("XIFYZ OROKQ")).toBeTruthy();
    expect(await screen.getByText("UOPSC CFRHV")).toBeTruthy();
    expect(await screen.getByText("RBGMX SAWLZ")).toBeTruthy();
  });

});

function calculatePagination(pageNumber:number,itemsPerPage:number, array:any){
  let start = pageNumber * itemsPerPage - itemsPerPage;
  let end = pageNumber * itemsPerPage;
  array._links.item = array._links.item.slice(start,end);
  return array;
}

function sortArray(key, order) {
  return (element1, element2) => {
    if (!element1.summary[key] || !element2.summary[key]) {
      return 0;
    }
    const varA =
      typeof element1.summary[key] === "string"
        ? element1.summary[key].toUpperCase()
        : element1.summary[key];
    const varB =
      typeof element2.summary[key] === "string"
        ? element2.summary[key].toUpperCase()
        : element2.summary[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

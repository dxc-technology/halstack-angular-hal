import { render, waitForElement } from '@testing-library/angular';
import { screen, waitFor } from "@testing-library/dom";
import { DxcHalTable } from './table';
import { CdkTableModule } from './table-module';
import { HttpClientModule } from '@angular/common/http';
import data from "./mocks/tableResponseMock";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HalResourceService } from './services/diaas-angular-cdk-hal.service';
import { of } from 'rxjs';
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
    const hal = await render(DxcHalTable, {
      template:`  <dxc-hal-table halUrl="http://localhost:3000/data" [headers]="" [itemsPerPage]="4">
                      <ng-container dxcColumnDef="User" [sortable]="{isSortable:true, propertyName:'prospect-full-name'}">
                          <td *dxcCellDef="let item"> {{item["prospect-full-name"]}} </td>
                      </ng-container>                
                      <ng-container dxcColumnDef="Email">
                          <td *dxcCellDef="let item"> {{item["prospect-distributor-id"]}} </td>
                      </ng-container>
                  </dxc-hal-table>`,
     imports: [CdkTableModule, HttpClientTestingModule, HttpClientModule],
     providers:[
      {
        provide: HalResourceService,
        useValue: {
          handleGet: () => of(data),
        },
      },
     ],
     excludeComponentDeclaration: true
  });    
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    const req = httpMock.expectOne(`http://localhost:3000/data?_start=1&_num=4`);
    expect(req.request.method).toBe('GET');
    req.flush(data);
    await waitForElement(() => hal.getByText(/Loading/i));
    await waitForElement(() => hal.getByRole("table"));
    const table = hal.getByRole("table");
    expect(table).toBeTruthy();
    hal.detectChanges();
    expect(await screen.getByText("BOCJT FJUUZ")).toBeTruthy();
  });

});
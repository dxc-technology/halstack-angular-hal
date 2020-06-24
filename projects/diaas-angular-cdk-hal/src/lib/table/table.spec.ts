import { render, fireEvent } from '@testing-library/angular';
import { DxcHalTable } from './table';
import { CdkTableModule } from './table-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
    rest.get('http://localhost:3000/data', (req, res, ctx) => {
      return res(
          ctx.json(
            {
                "_links": {
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
                    }
                }
              )
          )
    })
  )

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('DxcResultset Table tests', () => {
  test('should render dxc-hal-table', async () => {
    console.log()
    const hal = await render(DxcHalTable, {
        template:`  <dxc-hal-table halUrl="http://localhost:3000/data" [headers]="" [itemsPerPage]="4">
                        <ng-container dxcColumnDef="User" [sortable]="{isSortable:true, propertyName:'prospect-full-name'}">
                            <td *dxcCellDef="let item"> {{element['prospect-full-name']}} </td>
                        </ng-container>                
                        <ng-container dxcColumnDef="Email">
                            <td *dxcCellDef="let element"> {{element['prospect-distributor-id']}} </td>
                        </ng-container>
                    </dxc-hal-table>`,
       imports: [CdkTableModule, HttpClientTestingModule],
       excludeComponentDeclaration: true
    })
    expect(hal.getByText("BOCJT FJUUZ")).toBeTruthy();
  });

});
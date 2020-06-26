import { render, fireEvent } from '@testing-library/angular';
import { DxcHalTable } from './table';
import { CdkTableModule } from './table-module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { server } from "../../../../../db/server";
import data from "./tableResponseMock";

jest.mock("../../../../../db/server");

const server = setupServer(
    rest.get('http://localhost:3000/data', (req, res, ctx) => {
      return res(
          ctx.delay(500),
          ctx.json(
            data
              )
          )
    })
  )

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('DxcHalTable tests', () => {
  test('should render dxc-hal-table', async () => {
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
    expect(hal.getByText("loading")).toBeTruthy();
    expect(hal.getByText("aa")).toBeTruthy();
  });

});
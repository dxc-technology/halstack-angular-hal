import { render, waitForElement } from "@testing-library/angular";
import { screen, waitFor, fireEvent } from "@testing-library/dom";
import { DxcAutocompleteHalComponent } from "./dxc-autocomplete-hal.component";
import { DxcAutocompleteHalModule } from "./dxc-autocomplete-hal.module";
import { HttpClientModule } from "@angular/common/http";
import data from "./mocks/responseMock";

import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { HalResourceService } from "../diaas-angular-cdk-hal.service";
import { of } from "rxjs";
import { TestBed, getTestBed } from "@angular/core/testing";

describe("Hal Autocomplete", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  afterEach(() => {
    httpMock.verify();
  });

  test("should render dxc-hal-autocomplete", async () => {
    const halAutocomplete = await render(DxcAutocompleteHalComponent, {
      template: `  <dxc-autocomplete-hal
                    label="Input label"
                    halUrl="http://localhost:3000/data"
                    propertyName="prospect-full-name"
                    rel="search"
                  ></dxc-autocomplete-hal>`,
      imports: [
        DxcAutocompleteHalModule,
        HttpClientTestingModule,
        HttpClientModule,
      ],
      providers: [
        {
          provide: HalResourceService,
          useValue: {
            handleGet: () => of(data),
          },
        },
      ],
      excludeComponentDeclaration: true,
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    const req = httpMock.expectOne(`http://localhost:3000/data`);
    expect(req.request.method).toBe("GET");
    req.flush(data);
    halAutocomplete.detectChanges();
    screen.getByText("Input label");
  });

  test("should render dxc-hal-autocomplete options", async () => {
    const halAutocomplete = await render(DxcAutocompleteHalComponent, {
      template: `  <dxc-autocomplete-hal
                    label="Input label"
                    halUrl="http://localhost:3000/data"
                    propertyName="prospect-full-name"
                    rel="search"
                  ></dxc-autocomplete-hal>`,
      imports: [
        DxcAutocompleteHalModule,
        HttpClientTestingModule,
        HttpClientModule,
      ],
      providers: [
        {
          provide: HalResourceService,
          useValue: {
            handleGet: () => of(data),
          },
        },
      ],
      excludeComponentDeclaration: true,
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    const req = httpMock.expectOne(`http://localhost:3000/data`);
    expect(req.request.method).toBe("GET");
    req.flush(data);
    halAutocomplete.detectChanges();
    fireEvent.focusIn(halAutocomplete.getByRole("combobox"));
    halAutocomplete.detectChanges();
    expect(screen.getByText("BOCJT FJUUZ"));
    expect(screen.getByText("RBGMX SAWLZ"));
    expect(screen.getByText("THISG ZDZOC"));
  });

  test("should call function on option click", async () => {
    const onClickFunction = jest.fn();
    const halAutocomplete = await render(DxcAutocompleteHalComponent, {
      template: `  <dxc-autocomplete-hal
                    label="Input label"
                    halUrl="http://localhost:3000/data"
                    propertyName="prospect-full-name"
                    rel="search"
                    (onChange)="onClickFunction($event)"
                  ></dxc-autocomplete-hal>`,
      componentProperties: { onClickFunction },
      imports: [
        DxcAutocompleteHalModule,
        HttpClientTestingModule,
        HttpClientModule,
      ],
      providers: [
        {
          provide: HalResourceService,
          useValue: {
            handleGet: () => of(data),
          },
        },
      ],
      excludeComponentDeclaration: true,
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    let req = httpMock.expectOne(`http://localhost:3000/data`);
    expect(req.request.method).toBe("GET");
    req.flush(data);
    halAutocomplete.detectChanges();
    fireEvent.focusIn(halAutocomplete.getByRole("combobox"));
    halAutocomplete.detectChanges();
    expect(screen.getByText("BOCJT FJUUZ"));
    expect(screen.getByText("RBGMX SAWLZ"));
    expect(screen.getByText("THISG ZDZOC"));
    fireEvent.click(screen.getByText("BOCJT FJUUZ"));
    req = httpMock.expectOne(`http://localhost:3000/data?prospect-full-name=BOCJT FJUUZ`);
    expect(req.request.method).toBe('GET');
    req.flush(data);
    halAutocomplete.detectChanges();
    expect(onClickFunction).toHaveBeenCalledWith("BOCJT FJUUZ");
  });
});

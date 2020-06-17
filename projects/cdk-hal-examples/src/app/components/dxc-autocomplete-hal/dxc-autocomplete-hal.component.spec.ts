import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcAutocompleteHalComponent } from './dxc-autocomplete-hal.component';

describe('DxcAutocompleteHalComponent', () => {
  let component: DxcAutocompleteHalComponent;
  let fixture: ComponentFixture<DxcAutocompleteHalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcAutocompleteHalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcAutocompleteHalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

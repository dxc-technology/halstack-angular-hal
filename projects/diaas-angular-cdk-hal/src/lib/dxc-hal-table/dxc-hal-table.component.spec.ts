import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxcHalTableComponent } from './dxc-hal-table.component';

describe('DxcHalTableComponent', () => {
  let component: DxcHalTableComponent;
  let fixture: ComponentFixture<DxcHalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxcHalTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxcHalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsSinglePageComponent } from './hrs-single-page.component';

describe('HrsSinglePageComponent', () => {
  let component: HrsSinglePageComponent;
  let fixture: ComponentFixture<HrsSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

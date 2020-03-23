import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsNestedPageComponent } from './hrs-nested-page.component';

describe('HrsNestedPageComponent', () => {
  let component: HrsNestedPageComponent;
  let fixture: ComponentFixture<HrsNestedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsNestedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsNestedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

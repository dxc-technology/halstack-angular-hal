import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsMultiPageComponent } from './hrs-multi-page.component';

describe('HrsMultiPageComponent', () => {
  let component: HrsMultiPageComponent;
  let fixture: ComponentFixture<HrsMultiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsMultiPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsMultiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

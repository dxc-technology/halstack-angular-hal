import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalTablePageComponent } from './hal-table-page.component';

describe('HalTablePageComponent', () => {
  let component: HalTablePageComponent;
  let fixture: ComponentFixture<HalTablePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalTablePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSpinnerComponent } from './table-spinner.component';

describe('TableSpinnerComponent', () => {
  let component: TableSpinnerComponent;
  let fixture: ComponentFixture<TableSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

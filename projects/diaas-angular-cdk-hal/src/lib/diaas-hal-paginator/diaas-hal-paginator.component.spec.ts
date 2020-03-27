import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaasHalPaginatorComponent } from './diaas-hal-paginator.component';

describe('DiaasHalPaginatorComponent', () => {
  let component: DiaasHalPaginatorComponent;
  let fixture: ComponentFixture<DiaasHalPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaasHalPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaasHalPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

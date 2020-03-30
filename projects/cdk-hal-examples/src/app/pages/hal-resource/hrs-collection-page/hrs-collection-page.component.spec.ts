import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrsCollectionPageComponent } from './hrs-collection-page.component';

describe('HrsCollectionPageComponent', () => {
  let component: HrsCollectionPageComponent;
  let fixture: ComponentFixture<HrsCollectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrsCollectionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrsCollectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

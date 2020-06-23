import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteHalComponent } from './autocomplete-hal.component';

describe('AutocompleteHalComponent', () => {
  let component: AutocompleteHalComponent;
  let fixture: ComponentFixture<AutocompleteHalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteHalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteHalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

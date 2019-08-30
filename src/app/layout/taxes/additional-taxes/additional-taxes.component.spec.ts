import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalTaxesComponent } from './additional-taxes.component';

describe('AdditionalTaxesComponent', () => {
  let component: AdditionalTaxesComponent;
  let fixture: ComponentFixture<AdditionalTaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalTaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

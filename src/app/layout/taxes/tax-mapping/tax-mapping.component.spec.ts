import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxMappingComponent } from './tax-mapping.component';

describe('TaxMappingComponent', () => {
  let component: TaxMappingComponent;
  let fixture: ComponentFixture<TaxMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

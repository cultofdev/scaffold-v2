import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxReceiptComponent } from './tax-receipt.component';

describe('TaxReceiptComponent', () => {
  let component: TaxReceiptComponent;
  let fixture: ComponentFixture<TaxReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

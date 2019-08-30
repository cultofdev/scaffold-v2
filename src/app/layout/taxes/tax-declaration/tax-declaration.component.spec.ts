import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDeclarationComponent } from './tax-declaration.component';

describe('TaxDeclarationComponent', () => {
  let component: TaxDeclarationComponent;
  let fixture: ComponentFixture<TaxDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

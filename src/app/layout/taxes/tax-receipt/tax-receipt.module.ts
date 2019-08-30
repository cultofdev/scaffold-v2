import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxReceiptComponent } from './tax-receipt.component';
import { TaxReceiptRoutingModule } from './tax-receipt-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TaxReceiptRoutingModule
  ],
  declarations: [
    TaxReceiptComponent
  ]
})
export class TaxReceiptModule { }

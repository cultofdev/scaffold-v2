import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxReceiptComponent } from './tax-receipt.component';

const routes: Routes = [
  {
    path: '',
    component: TaxReceiptComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TaxReceiptRoutingModule { }

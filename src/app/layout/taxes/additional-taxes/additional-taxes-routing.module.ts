import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionalTaxesComponent } from './additional-taxes.component';

const routes: Routes = [
  {
    path: '',
    component: AdditionalTaxesComponent
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
export class AdditionalTaxesRoutingModule { }

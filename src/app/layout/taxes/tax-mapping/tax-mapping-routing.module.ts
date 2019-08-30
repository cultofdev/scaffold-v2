import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxMappingComponent } from './tax-mapping.component';

const routes: Routes = [
  {
    path: '',
    component: TaxMappingComponent
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
export class TaxMappingRoutingModule { }

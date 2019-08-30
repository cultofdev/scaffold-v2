import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaxDeclarationComponent } from './tax-declaration.component';

const routes: Routes = [
  {
    path: '',
    component: TaxDeclarationComponent
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
export class TaxDeclarationRoutingModule { }

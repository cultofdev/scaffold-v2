import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxDeclarationRoutingModule } from './tax-declaration-routing.module';
import { TaxDeclarationComponent } from './tax-declaration.component';

@NgModule({
  imports: [
    CommonModule,
    TaxDeclarationRoutingModule
  ],
  declarations: [
    TaxDeclarationComponent
  ]
})
export class TaxDeclarationModule { }

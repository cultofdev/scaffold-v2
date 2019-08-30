import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxMappingComponent } from './tax-mapping.component';
import { TaxMappingRoutingModule } from './tax-mapping-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TaxMappingRoutingModule
  ],
  declarations: [
    TaxMappingComponent
  ]
})
export class TaxMappingModule { }

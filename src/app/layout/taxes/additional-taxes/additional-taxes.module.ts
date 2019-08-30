import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalTaxesComponent } from './additional-taxes.component';
import { AdditionalTaxesRoutingModule } from './additional-taxes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdditionalTaxesRoutingModule
  ],
  declarations: [
    AdditionalTaxesComponent
  ]
})
export class AdditionalTaxesModule { }

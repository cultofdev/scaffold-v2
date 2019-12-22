import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { AddressRoutingModule } from './address-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBusyModule } from 'ng-busy';

@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    NgbModule,
    NgBusyModule
  ]
})
export class AddressModule { }

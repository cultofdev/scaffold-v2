import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { PersonRoutingModule } from './person-routing.module';
import { NgBusyModule } from 'ng-busy';

import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'primeng/components/common/messageservice';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    NgBusyModule,
    VirtualScrollerModule,
    PaginatorModule,
    ToastModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    MessageService
  ]
})
export class PersonModule { }

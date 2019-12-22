import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddComponent } from './add/add.component';
import { AddModule } from './add/add.module';
import { StockComponent } from './express-api/stock/stock.component';
import { CarComponent } from './express-api/car/car.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        AddModule,
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
    ]
})
export class LayoutModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'prefix'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'person',
                loadChildren: () => import('./express-api/person/person.module').then(m => m.PersonModule)
            },
            {
                path: 'address',
                loadChildren: () => import('./express-api/address/address.module').then(m => m.AddressModule)
            },
            {
                path: 'car',
                loadChildren: () => import('./express-api/car/car.module').then(m => m.CarModule)
            },
            {
                path: 'stock',
                loadChildren: () => import('./express-api/stock/stock.module').then(m => m.StockModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

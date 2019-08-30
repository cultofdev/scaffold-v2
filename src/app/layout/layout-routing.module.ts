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
                path: 'additional-taxes',
                loadChildren: () => import('./taxes/additional-taxes/additional-taxes.module').then(m => m.AdditionalTaxesModule)
            },
            {
                path: 'tax-declaration',
                loadChildren: () => import('./taxes/tax-declaration/tax-declaration.module').then(m => m.TaxDeclarationModule)
            },
            {
                path: 'tax-mapping',
                loadChildren: () => import('./taxes/tax-mapping/tax-mapping.module').then(m => m.TaxMappingModule)
            },
            {
                path: 'tax-receipt',
                loadChildren: () => import('./taxes/tax-receipt/tax-receipt.module').then(m => m.TaxReceiptModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}

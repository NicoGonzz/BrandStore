import { Routes } from '@angular/router';

import {ListComponent} from '@product/pages/list/list.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { PaymentGatewaysComponent } from '@info/pages/payment-gateways/payment-gateways.component';
import { ProductDetailComponent } from '@product/pages/product-detail/product-detail.component';

export const routes: Routes = [
    {
       path: '',
       component: LayoutComponent,
       children: [
        {
        path: '',
        loadComponent: ()=> import('./domains/products/pages/list/list.component').then(m => m.ListComponent)
        },
        {
        path: 'about',
        loadComponent: ()=> import('./domains/info/pages/about/about.component').then(m => m.AboutComponent)
        },
        {
        path: 'product/:id',
        component: ProductDetailComponent
        },
        {
        path: 'payment-gateways',
        loadComponent: ()=> import('./domains/info/pages/payment-gateways/payment-gateways.component').then(m => m.PaymentGatewaysComponent)
        }, 
       ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];


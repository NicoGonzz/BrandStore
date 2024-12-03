import { Routes } from '@angular/router';

import {ListComponent} from '@product/pages/list/list.component';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFoundComponent } from '@info/pages/not-found/not-found.component';
import { PaymentGatewaysComponent } from '@info/pages/payment-gateways/payment-gateways.component';

export const routes: Routes = [
    {
       path: '',
       component: LayoutComponent,
       children: [
        {
        path: '',
        component: ListComponent
        },
        {
        path: 'about',
        component: AboutComponent
         },
        {
        path: 'payment-gateways',
        component: PaymentGatewaysComponent
        }, 
       ]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];


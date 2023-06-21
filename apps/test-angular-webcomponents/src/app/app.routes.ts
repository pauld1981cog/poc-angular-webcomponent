import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
    },
    {
        path: 'flight',
        loadChildren: () => import('./flight/flight.module').then(m => m.FlightModule)
    }
];

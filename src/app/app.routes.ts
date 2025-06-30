import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    },
    {
        path: 'register-product',
        loadComponent: () => import('./pages/register-product/register-product.component').then(m => m.RegisterProductComponent),
    },
    {
        path: 'search-product',
        loadComponent: () => import('./pages/search-product/search-product.component').then(m => m.SearchProductComponent),
    },
    {
        path: 'register-order',
        loadComponent: () => import('./pages/register-order/register-order.component').then(m => m.RegisterOrderComponent),
    }
];

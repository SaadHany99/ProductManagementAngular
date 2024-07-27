import { Routes } from '@angular/router';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductFormComponent } from './Components/product-form/product-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    {path:'products',component:ProductListComponent},
    {path:'product-add',component:ProductFormComponent},
    {path:'product-edit/:id',component:ProductFormComponent}
];

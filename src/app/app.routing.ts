import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductViewComponentComponent } from './product-view-component/product-view-component.component';

const appRpoutes: Routes = [
  {path: 'home' , component: HomeComponent},
   {path: 'contact' , component: ContactComponent},
    {path: 'products' , component: ProductsComponent},
    {path: 'product/:id' , component: ProductViewComponentComponent},
     { path: '', redirectTo: 'home', pathMatch: 'full' },
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRpoutes);

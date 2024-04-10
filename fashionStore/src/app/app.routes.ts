import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products/:id', component: ProductPageComponent },
];

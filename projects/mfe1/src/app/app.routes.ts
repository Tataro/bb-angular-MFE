import { Routes } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { WorkComponent } from './components/work/work.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'mfe1',
    pathMatch: 'full',
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
];

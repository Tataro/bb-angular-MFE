import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'work',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Work').then((m) => m.WorkComponent),
  },
  //   {
  //     path: 'mfe1',
  //     loadComponent: () =>
  //       loadRemoteModule('mfe1', './routes').then((m) => m.APP_ROUTES),
  //   },
];

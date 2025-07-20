import { Routes } from '@angular/router';
import { ServiceDetails } from './components/-service-details/service-details';
import { Appointment } from './pages/-appointment/appointment';
import { Home } from './pages/-home/home';
import { Services } from './pages/-services/services';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'services', component: Services },
  { path: 'services/:slug', component: ServiceDetails },
  { path: 'contact', component: Appointment },
  { path: '**', redirectTo: '' } // catch-all
];

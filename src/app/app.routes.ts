import { Routes } from '@angular/router';
import { BlogDetails } from './components/-blog-details/blog-details';
import { ServiceDetails } from './components/-service-details/service-details';
import { AboutUs } from './pages/-about-us/about-us';
import { Appointment } from './pages/-appointment/appointment';
import { Blogs } from './pages/-blogs/blogs';
import { Home } from './pages/-home/home';
import { Services } from './pages/-services/services';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'services', component: Services },
  { path: 'services/:slug', component: ServiceDetails },
  { path: 'blogs', component: Blogs },
  // { path: 'blogs/:tag', component: Blogs }, // TODO: filter blogs by tags (blog details page)
  { path: 'blogs/:slug', component: BlogDetails },
  { path: 'contact', component: Appointment },
  // { path: 'team/:slug', component: TeamDetails }, // TODO: implement team member route (blog details page)
  { path: '**', redirectTo: '' } // catch-all
];

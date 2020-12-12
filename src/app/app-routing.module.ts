import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './about/contact/contact.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
  }, {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { preload: true }
  }, {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  }, {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
  }, {
    path: 'contact',
    component: ContactComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

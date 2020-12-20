import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './about/contact/contact.component';
import { EventsComponent } from './events/events/events.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [{
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: { preload: true }
  }, {
    path: 'about',
    component: AboutComponent,
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  }, {
    path: 'events',
    component: EventsComponent,
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: '',
    component: HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

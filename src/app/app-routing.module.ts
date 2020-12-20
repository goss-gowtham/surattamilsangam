import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { EventsComponent } from './core/events/events.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [{
    path: 'home',
    component: HomeComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'events',
    component: EventsComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    useHash: true,
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

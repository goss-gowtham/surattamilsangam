import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'
  }, {
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
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
  }, {
    path: '**',
    redirectTo: '/home'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

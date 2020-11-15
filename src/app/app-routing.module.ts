import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
  }, {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

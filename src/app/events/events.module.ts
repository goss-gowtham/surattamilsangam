import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';
import { HomeModule } from '../home/home.module';
import { GalleryModule } from 'ng-gallery';


@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    HomeModule,

    GalleryModule,
  ]
})
export class EventsModule { }

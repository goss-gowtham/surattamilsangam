import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about/about.component';
import { AgGridModule } from 'ag-grid-angular';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,

    AgGridModule.withComponents([]),
    HomeModule,
  ],
  exports: [AboutComponent]
})
export class AboutModule { }

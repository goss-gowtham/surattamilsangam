import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { GalleryModule } from 'ng-gallery';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { ThirukkuralComponent } from './core/thirukkural/thirukkural.component';
import { HomeComponent } from './core/home/home.component';
import { EventsComponent } from './core/events/events.component';
import { AboutComponent } from './core/about/about.component';
import { ContactComponent } from './core/contact/contact.component';
import { MatrimonyComponent } from './core/matrimony/matrimony.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThirukkuralComponent,
    HomeComponent,
    EventsComponent,
    AboutComponent,
    ContactComponent,
    MatrimonyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,

    AgGridModule.withComponents([]),
    GalleryModule.withConfig({
      imageSize: 'cover',
      loadingStrategy: 'lazy',
      thumbWidth: 100,
      thumbHeight: 80,
      playerInterval: 6000,
      autoPlay: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

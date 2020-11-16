import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryModule } from 'ng-gallery';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
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
      counter: false,
      autoPlay: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

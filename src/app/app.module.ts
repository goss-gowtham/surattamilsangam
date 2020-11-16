import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { GalleryModule } from 'ng-gallery';

import { HttpClientModule } from '@angular/common/http';
import { ThirukkuralComponent } from './home/thirukkural/thirukkural.component';
import { AboutComponent } from './about/about/about.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    HomeComponent,
    ThirukkuralComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,

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

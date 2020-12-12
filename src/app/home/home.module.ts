import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GalleryModule } from 'ng-gallery';
import { ThirukkuralComponent } from './thirukkural/thirukkural.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [HomeComponent, ThirukkuralComponent],
  imports: [
    CommonModule,

    GalleryModule,
    HomeRoutingModule,
  ],
  exports: [HomeComponent, ThirukkuralComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }

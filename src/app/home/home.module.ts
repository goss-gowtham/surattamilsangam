import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { GalleryModule } from 'ng-gallery';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,

    GalleryModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

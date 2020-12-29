import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: GalleryItem[];
  firebasePrefix = 'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/';
  events;

  constructor(
    private http: HttpClient
  ) { }

  async ngOnInit() {
    let homeSlide: any = await this.http.get(this.firebasePrefix + 'Data%2FhomeSlideshow.json?alt=media').toPromise();
    this.images = homeSlide.map((img) => {
      const image = this.firebasePrefix + encodeURIComponent(img.path) + '.' + img.format + '?alt=media';
      return new ImageItem({ src: image, thumb: image});
    });
    let data: any = await this.http.get(this.firebasePrefix + 'Data%2Fevents.json?alt=media').toPromise();
    this.events = data.sort((a, b) => b.year - a.year);
    this.events = data.slice(0,4);
  }

}

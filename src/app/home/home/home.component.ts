import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('carousel', { static: false }) carouselRef: TemplateRef<any>;
  images: GalleryItem[];
  firebasePrefix = 'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/';
  events;
  modalData;

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }

  async ngOnInit() {
    let homeSlide: any = await this.http.get(this.firebasePrefix + 'Data%2FhomeSlideshow.json?alt=media').toPromise();
    this.images = homeSlide.map((img) => {
      const image = this.firebasePrefix + encodeURIComponent(img.path) + '.' + img.format + '?alt=media';
      return new ImageItem({ src: image, thumb: image});
    });
    let data: any = await this.http.get(this.firebasePrefix + 'Data%2Fevents.json?alt=media').toPromise();
    this.events = data.events.sort((a, b) => b.year - a.year);
    this.events = data.events.slice(0,4);
  }

  openModal(event) {
    let imagesArray = [];
    this.modalData = {};
    for (let i = 1; i<=event.photoCount; i++) {
      const imagePath = this.firebasePrefix + encodeURIComponent(event.photoPath) + i + '.' + event.photoFormat + '?alt=media';
      imagesArray.push(imagePath);
    }
    this.modalData.title = event.title;
    this.modalData.images = imagesArray.map((img) => {
      return new ImageItem({ src: img, thumb: img});
    });
    this.modalService.open(this.carouselRef, {centered: true, backdropClass: 'light-backdrop'})
  }

}

import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: GalleryItem[];

  constructor() { }

  ngOnInit(): void {
    const images = [
      'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2Fagm2019-1.jpg?alt=media',
      'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2FLifeTimeMembersGetToGather.jpeg?alt=media',
      'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2Fph9.jpeg?alt=media',
    ];
    this.images = images.map((img) => {
      return new ImageItem({ src: img, thumb: img});
    });
  }

}

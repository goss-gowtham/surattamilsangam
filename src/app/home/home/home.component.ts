import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: GalleryItem[];
  imagesArray = [
    'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2Fagm2019-1.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2FLifeTimeMembersGetToGather.jpeg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2Fph9.jpeg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2Fagm2019-1.jpg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2FLifeTimeMembersGetToGather.jpeg?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2Fph9.jpeg?alt=media',
  ];
  events = [{
    src: 'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2Fagm2019-1.jpg?alt=media',
    title: 'AGM',
    desc: 'A General Meet',
    year: '2019'
  }, {
    src: 'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2FLifeTimeMembersGetToGather.jpeg?alt=media',
    title: 'Get together',
    desc: 'Lifetime members get together meet',
    year: '2019'
  }, {
    src: 'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2FLifeTimeMembersGetToGather.jpeg?alt=media',
    title: 'Get together',
    desc: 'Lifetime members get together meet',
    year: '2019'
  }, {
    src: 'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/Home%20Gallery%2Fagm2019-1.jpg?alt=media',
    title: 'AGM',
    desc: 'A General Meet',
    year: '2019'
  }, ];


  constructor() { }

  ngOnInit(): void {
    this.images = this.imagesArray.map((img) => {
      return new ImageItem({ src: img, thumb: img});
    });
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: GalleryItem[];
  firebasePrefix = 'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/';
  imagesArray = [
    this.firebasePrefix + 'Home%20Gallery%2Fagm2019-1.jpg?alt=media',
    this.firebasePrefix + 'Home%20Gallery%2FLifeTimeMembersGetToGather.jpeg?alt=media',
    this.firebasePrefix + 'Home%20Gallery%2Fph9.jpeg?alt=media',
    this.firebasePrefix + 'Home%20Gallery%2Fagm2019-1.jpg?alt=media',
    this.firebasePrefix + 'Home%20Gallery%2FLifeTimeMembersGetToGather.jpeg?alt=media',
    this.firebasePrefix + 'Home%20Gallery%2Fph9.jpeg?alt=media',
  ];
  events;


  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.images = this.imagesArray.map((img) => {
      return new ImageItem({ src: img, thumb: img});
    });
    let data: any = await this.http.get(this.firebasePrefix + 'Data%2Fevents.json?alt=media&token=53dae2b8-3fd3-4762-844c-841fc998e50b').toPromise();
    this.events = data.events.sort((a, b) => b.year - a.year);
    this.events = data.events.slice(0,4);
  }

}

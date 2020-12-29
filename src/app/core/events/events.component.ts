import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageItem, YoutubeItem } from 'ng-gallery';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @ViewChild('carousel', { static: false }) carouselRef: TemplateRef<any>;
  events: any;
  firebasePrefix = 'https://firebasestorage.googleapis.com/v0/b/surattamilsangam-84683.appspot.com/o/';
  modalData;
  upcomingEventList: any;
  colors = ['#24bd24', '#E8CEBF', '#4DA8DA', '#FFD6C', '#9DC88D', '#A3BCB6', '#ffa8B6', '#8458B3'];
  autoPlay;

  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    ) { }

  async ngOnInit() {
    let data: any = await this.http.get(this.firebasePrefix + 'Data%2Fevents.json?alt=media').toPromise();
    this.events = data.events.sort((a, b) => b.year - a.year);
    this.events = data.events;
    this.generateBalls();
    this.upcomingEvents();
  }

  async upcomingEvents() {
    let eventList: any = await this.http.get(this.firebasePrefix + 'Data%2Fupcomingevents.json?alt=media').toPromise();
    this.upcomingEventList = eventList.map(event => {
      if (event.hasOwnProperty('images') && event.images.length > 1) {
        event.images = event.images.map(image => {
          return this.firebasePrefix + encodeURIComponent(image.photoPath) + '.' + image.photoFormat + '?alt=media';
        });
      }
      event.color = this.colors[Math.floor(Math.random() * 8) + 1];
      return event;
    })
  }

  generateBalls() {
        // Some random colors
        const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

        const numBalls = 50;
        const balls = [];

        for (let i = 0; i < numBalls; i++) {
          let ball = document.createElement("div");
          ball.classList.add("ball");
          ball.style.background = colors[Math.floor(Math.random() * colors.length)];
          ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
          ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
          ball.style.transform = `scale(${Math.random()})`;
          ball.style.width = `${Math.random()}em`;
          ball.style.height = ball.style.width;

          balls.push(ball);
          document.getElementById('balls').append(ball);
        }

        // Keyframes
        balls.forEach((el, i, ra) => {
          let to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
          };

          let anim = el.animate(
            [
              { transform: "translate(0, 0)" },
              { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
              duration: (Math.random() + 1) * 5000, // random duration
              direction: "alternate",
              fill: "both",
              iterations: Infinity,
              easing: "ease-in-out"
            }
          );
        });
  }

  openModal(event) {
    this.autoPlay = true;
    let imagesArray = [];
    this.modalData = {};
    if (event.hasOwnProperty('photoCount')) {
      for (let i = 1; i<=event.photoCount; i++) {
        const imagePath = this.firebasePrefix + encodeURIComponent(event.photoPath) + i + '.' + event.photoFormat + '?alt=media';
        imagesArray.push(imagePath);
      }
    } else {
      imagesArray = event;
    }
    this.modalData.title = event.title;
    this.modalData.images = imagesArray.map((img) => {
      return new ImageItem({ src: img, thumb: img});
    });
    if (event.hasOwnProperty('youtube')) {
      this.autoPlay = false;
      this.modalData.images.push(new YoutubeItem({type: 'youtube', autoplay: true, src: event.youtube}));
    }
    this.modalService.open(this.carouselRef, {centered: true, backdropClass: 'light-backdrop'})
  }

}

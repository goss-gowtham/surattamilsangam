import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageItem } from 'ng-gallery';

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

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
    ) { }

  async ngOnInit() {
    let data: any = await this.http.get(this.firebasePrefix + 'Data%2Fevents.json?alt=media&token=53dae2b8-3fd3-4762-844c-841fc998e50b').toPromise();
    this.events = data.events.sort((a, b) => b.year - a.year);
    this.events = data.events;
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

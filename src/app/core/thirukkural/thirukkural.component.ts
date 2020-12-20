import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thirukkural',
  templateUrl: './thirukkural.component.html',
  styleUrls: ['./thirukkural.component.scss']
})
export class ThirukkuralComponent implements OnInit {
  kural: any;
  number = Math.floor(Math.random() * 1330) + 1;
  toggleMeaning = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    try {
      this.http.get(`https://api-thirukkural.web.app/kural?num=${this.number}`).subscribe(d => {
        this.kural = d;
      });
    } catch (e) {
      this.kural.line1 = 'Sorry, we couldnt fetch a kural at this moment';
      this.kural.line2 = 'Please try again!';
    }
  }

}

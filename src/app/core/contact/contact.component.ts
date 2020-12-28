import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  purpose = "";
  validate: number;
  random1 = Math.floor(Math.random() * 5) + 1;
  random2 = Math.floor(Math.random() * 5) + 1;
  constructor() { }

  ngOnInit(): void {
  }

}

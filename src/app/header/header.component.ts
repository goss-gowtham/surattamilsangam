import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  link: [
    {
      name: 'HOME',
      link: '/pages/home'
    },
    {
      name: 'ABOUT',
      link: '/pages/home/about'
    },
    {
      name: 'BLOG',
      link: '#blog'
    },
    {
      name: 'CONTACT',
      link: '/pages/contact'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

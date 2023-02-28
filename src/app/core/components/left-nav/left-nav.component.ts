import { Component } from '@angular/core';
import { MenuItem } from '../../models/MenuItem';


@Component({
  selector: 'left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})

export class LeftNavComponent {
  menuItems: MenuItem[];
  constructor() {
    this.menuItems = [
      new MenuItem('Home', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/home', []),
      new MenuItem('About', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/about', []),
      new MenuItem('Contact', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/contact', []),
      new MenuItem('Blog', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/blog', []),
      new MenuItem('Portfolio', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/portfolio', []),
      new MenuItem('Services', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/services', []),
      new MenuItem('Testimonials', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/testimonials', []),
      new MenuItem('FAQ', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/faq', []),
      new MenuItem('Pricing', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/pricing', []),
      new MenuItem('Team', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/team', []),
      new MenuItem('Clients', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/clients', [])
    ];
  }
}

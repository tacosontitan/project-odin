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
      new MenuItem('Dashboard', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/dashboard', []),
      new MenuItem('Workflows', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/workflows', []),
      new MenuItem('Chat', "https://picsum.photos/200?random=" + Math.floor(Math.random() * 9999), '/chat', [])
    ];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navLinks: Array<{ name: string; link: string }> = [
    { name: 'Home', link: 'food-categories' },
    { name: 'Login', link: 'login' },
    { name: 'Contact', link: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

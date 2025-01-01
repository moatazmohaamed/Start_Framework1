import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isScrolled: number = 0;
  @HostListener('window:scroll')
  navbarAnimate() {
    const page = window.pageYOffset;
    this.isScrolled = page;
  }
}

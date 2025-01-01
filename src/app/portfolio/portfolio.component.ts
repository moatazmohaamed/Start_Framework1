import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  imports: [FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  imgSrc: string[] = [
    '/imgs/portfolio_one.png',
    '/imgs/portfolio_two.png',
    '/imgs/portfolio_three.png',
    '/imgs/portfolio_one.png',
    '/imgs/portfolio_two.png',
    '/imgs/portfolio_three.png',
  ];

  currentSrc: string = '';

  nextImg(): void {
    const currentIndex = this.imgSrc.indexOf(this.currentSrc);
    let nextImg = currentIndex + 1;
    this.currentSrc = this.imgSrc[nextImg];
  }

  prevImg(): void {
    const currentIndex = this.imgSrc.indexOf(this.currentSrc);
    let prevImg = currentIndex - 1;
    if (prevImg < 0) {
      prevImg = 5;
    }
    this.currentSrc = this.imgSrc[prevImg];
  }
}

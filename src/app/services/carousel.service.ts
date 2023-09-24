import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  constructor() {}

  getServices() {
    // Define and return an array of slide objects with image URLs
    return [
      { img: 'assets/carousel1.jpg' },
      { img: 'assets/carousel2.jpg' },
      { img: 'assets/carousel3.jpg' },
    ];
  }
}

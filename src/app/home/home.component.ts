import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../services/carousel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Explicitly define the type of the slides array
  slides: { img: string }[] = [];

  // Configuration settings for the carousel
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: true,
    speed: 1000,
  };

  constructor(private service: CarouselService) {}

  ngOnInit(): void {
    // Retrieve and set slide data from the service
    this.getServices();
  }

  getServices() {
    // Fetch slide data from the service
    this.slides = this.service.getServices();
  }
}

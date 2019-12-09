import { Component, OnInit } from '@angular/core';
import * as jquery from 'jquery';
declare var jQuery: any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    jQuery(function ($) {


      // jQuery('.carousel-class').slick({
      //   dots: false,
      //   infinite: false,
      //   speed: 300,
      //   slidesToShow: 4,
      //   slidesToScroll: 1,
      //   responsive: [
      //     {
      //       breakpoint: 1199,
      //       settings: {
      //         slidesToShow: 3,
      //         slidesToScroll: 1,
      //         infinite: true,
      //         dots: true
      //       }
      //     },
      //     {
      //       breakpoint: 860,
      //       settings: {
      //         slidesToShow: 2,
      //         slidesToScroll: 1
      //       }
      //     },
      //     {
      //       breakpoint: 480,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1
      //       }
      //     }
      //     // You can unslick at a given breakpoint now by adding:
      //     // settings: "unslick"
      //     // instead of a settings object
      //   ]
      // });



    });
  }

}

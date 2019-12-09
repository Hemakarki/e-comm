import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  encapsulation: ViewEncapsulation.None       
    
})


export class BannerComponent implements OnInit {


@Input('bannerInfo') element : {
    imgPath: any,
    productName: string,
    bannerTitle: string,
    percentageOff: any,
    productLine: string,
};

@Input() imgPath: any;
@Input() productName: string;
@Input() bannerTitle: string;
@Input() percentageOff: any;
@Input() productLine: string;

    
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    public productInfo: any[] = [
        {
            imagePath: 'https://elcopcbonline.com/var/photo/product/2000x4000/4/176/4.jpg',
            productName: 'BLUE PNEUMATIC POWER SPIN RIVET NUT TOOL BP-350QC',
            averageRating: 3.5,
            productPrice: '$1500.00',
            totalReview: 119,
            totalRating: 8
        }, {
            imagePath: 'https://elcopcbonline.com/var/photo/product/2000x4000/4/176/4.jpg',
            productName: 'BLUE PNEUMATIC POWER SPIN RIVET NUT TOOL BP-350QC',
            averageRating: 3.5,
            productPrice: '$1500.00',
            totalReview: 119,
            totalRating: 8
        },
        {
            imagePath: 'https://elcopcbonline.com/var/photo/product/2000x4000/4/176/4.jpg',
            productName: 'BLUE PNEUMATIC POWER SPIN RIVET NUT TOOL BP-350QC',
            averageRating: 3.5,
            productPrice: '$1500.00',
            totalReview: 119,
            totalRating: 8
        },
        {
            imagePath: 'https://elcopcbonline.com/var/photo/product/2000x4000/4/176/4.jpg',
            productName: 'BLUE PNEUMATIC POWER SPIN RIVET NUT TOOL BP-350QC',
            averageRating: 3.5,
            productPrice: '$1500.00',
            totalReview: 119,
            totalRating: 8
        }
    ]


    public bannerInfo: any[] = [
        {
            imagePath: '../../../assets/images/slider1.jpg',
            bannerTitle: 'Aviation Products',
            percentageOff: '20%',
            productLine: 'off on pratt engines',
        }, {
            imagePath: '../../../assets/images/slider2.jpg',
            bannerTitle: 'PRATT ENGINES',
            percentageOff: '20%',
            productLine: 'off on all engines',
        }
    ]


    constructor() { }

    ngOnInit() {


    }

}

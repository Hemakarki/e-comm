import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buy-parts',
    templateUrl: './buy-parts.component.html',
    styleUrls: ['./buy-parts.component.css']
})
export class BuyPartsComponent implements OnInit {

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

    public productInfo: any[] = [
        {
            imagePath: 'http://kte-avia.com/images/zap001.jpg',
            productName: 'BLUE PNEUMATIC POWER SPIN RIVET NUT TOOL BP-350QC',
            averageRating: 3.5,
            productPrice: '$1500.00',
            totalReview: 119,
            totalRating: 8
        },
        {
            imagePath: 'http://kte-avia.com/images/zap001.jpg',
            productName: 'BLUE PNEUMATIC POWER SPIN RIVET NUT TOOL BP-350QC',
            averageRating: 3.5,
            productPrice: '$1500.00',
            totalReview: 119,
            totalRating: 8
        }, {
            imagePath: 'http://kte-avia.com/images/zap001.jpg',
            productName: 'BLUE PNEUMATIC POWER SPIN RIVET NUT TOOL BP-350QC',
            averageRating: 3.5,
            productPrice: '$1500.00',
            totalReview: 119,
            totalRating: 8
        }, {
            imagePath: 'http://kte-avia.com/images/zap001.jpg',
            productName: 'BLUE PNEUMATIC POWER SPIN RIVET NUT TOOL BP-350QC',
            averageRating: 3.5,
            productPrice: '$1500.00',
            totalReview: 119,
            totalRating: 8
        }, {
            imagePath: 'http://kte-avia.com/images/zap001.jpg',
            productName: 'BLUE PNEUMATIC POWER SPIN RIVET NUT TOOL BP-350QC',
            averageRating: 3.5,
            productPrice: '$1500.00',
            totalReview: 119,
            totalRating: 8
        },
        {
            imagePath: 'http://kte-avia.com/images/zap001.jpg',
            productName: 'BLUE PNEUMATIC POWER SPIN RIVET NUT TOOL BP-350QC',
            averageRating: 3.5,
            productPrice: '$1500.00',
            totalReview: 119,
            totalRating: 8
        }, {
            imagePath: 'http://kte-avia.com/images/zap001.jpg',
            productName: 'BLUE PNEUMATIC POWER SPIN RIVET NUT TOOL BP-350QC',
            averageRating: 3.5,
            productPrice: '$1500.00',
            totalReview: 119,
            totalRating: 8
        }, {
            imagePath: 'http://kte-avia.com/images/zap001.jpg',
            productName: 'BLUE PNEUMATIC POWER SPIN RIVET NUT TOOL BP-350QC',
            averageRating: 3.5,
            productPrice: '$1500.00',
            totalReview: 119,
            totalRating: 8
        }

    ]


    constructor() { }

    ngOnInit() {
    }

}

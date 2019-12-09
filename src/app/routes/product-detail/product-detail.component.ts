import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
//import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ProductDetailComponent implements OnInit {
    activeMenu: boolean = true;
    menuOpen() {
        if (this.activeMenu) {
            this.activeMenu = false;
        } else {
            this.activeMenu = true;
        }
    };
    //galleryOptions: NgxGalleryOptions[];
    // galleryImages: NgxGalleryImage[];
    public max: number = 5;
    public rate: number = 0;
    public isReadonly: boolean = false;
    public overStar: number;
    public percent: number;
    public hoveringOver(value: number): void {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    public resetStar(): void {
        this.overStar = void 0;
    }
    averageRating: number = 4.5;
    totalReview: number = 4.5;
    totalRating: number = 4.5;@Input('customerReview') element: {
        commentRating: number,
        commentTitle: string,
        userName: string,
        commentDate: number,
        fullComment: string,
    }

    @Input() commentRating: number;@Input() commentTitle: string;@Input() userName: string;@Input() commentDate: number;@Input() fullComment: string;

    public imgArr = [
        '../../../assets/images/DetailBigImage.jpg',
        '../../../assets/images/detail1.jpg',
        '../../../assets/images/detail2.jpg',
        '../../../assets/images/detail3.jpg'
    ]
    public showImage = this.imgArr[0];
    changeImage(url) {
        this.showImage = url
    }

    public customerReview: any[] = [{
        commentRating: 4.5,
        averageRating: 4.5,
        commentTitle: 'More than Worth to buy',
        userName: 'Deepak',
        commentDate: '6 December 2016',
        fullComment: 'When this option is available for an item, the "Make an Offer" button will be displayed. When you click the button you can input the price you would like to propose for the item.',
    }, {
        commentRating: '4.5',
        averageRating: '4.5',
        commentTitle: 'More than Worth to buy',
        userName: 'Deepak',
        commentDate: '6 December 2016',
        fullComment: 'When this option is available for an item, the "Make an Offer" button will be displayed. When you click the button you can input the price you would like to propose for the item.'
    }]
    activeBid: boolean = true;

    currentBid() {
        if (this.activeBid) {
            this.activeBid = false;
        } else {
            this.activeBid = true;
        }
    };

    constructor() {}

    ngOnInit() {
        /*
          this.galleryOptions = [
        { "imageArrows": false, "imageSwipe": true, "thumbnailsArrows": false, "thumbnailsSwipe": true, "previewSwipe": true },
        { "breakpoint": 500, "width": "300px", "height": "300px", "thumbnailsColumns": 3 },
        { "breakpoint": 300, "width": "100%", "height": "200px", "thumbnailsColumns": 2 }
        ];

                this.galleryImages = [
                    {
                        small: 'assets/images/detail1.jpg',
                        medium: 'assets/images/detail1.jpg',
                        big: 'assets/images/detail1.jpg'
                    },
                    {
                        small: 'assets/images/DetailBigImage.jpg',
                        medium: 'assets/images/DetailBigImage.jpg',
                        big: 'assets/images/DetailBigImage.jpg'
                    },
                    {
                        small: 'assets/images/detail3.jpg',
                        medium: 'assets/images/detail3.jpg',
                        big: 'assets/images/detail3.jpg'
                    },
                    {
                        small: 'assets/images/detail2.jpg',
                        medium: 'assets/images/detail2.jpg',
                        big: 'assets/images/detail2.jpg'
                    }
                ];*/
    }
}
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
 templateUrl: './product.component.html',
 styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

@Input('productInfo') element : {
    imgPath: any,
    productName: string,
    averageRating: number,
    totalRating: number,
    totalReview: number,
    productPrice: number
};

@Input() imgPath: any;
@Input() productName: string;
@Input() averageRating: number;
@Input() totalRating: number;
@Input() totalReview: number;
@Input() productPrice: number;
    
 
 
 
 

constructor() { }

ngOnInit() {}


}


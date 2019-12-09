import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {

 public offerList : any [] = [

        {
            offerName :'Pratt Engine 25 % Off',
            startDate : '06/24/2017',
            endDate :'06/24/2017',
            status : 'Live',
        },{
            offerName :'Free Shipping',
            startDate : '06/24/2017',
            endDate :'06/24/2017',
            status : 'Live',
        },{
            offerName :'Get Benifit on Lubricant Oil',
            startDate : '06/24/2017',
            endDate :'06/24/2017',
            status : 'Expired',
        }
    ]
    
    
  constructor() { }

  ngOnInit() {
  }

}

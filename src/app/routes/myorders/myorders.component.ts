import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
    
    @Input ('myOrders') element: {

        orderNumber : any,
        orderDate : number,
        deliveryDate : number,
        orderStatus : string,
        linkPath :any,
    }

    @Input() orderNumber : any;
    @Input() orderDate : number;
    @Input() deliveryDate : number;
    @Input() orderStatus : string;
    @Input() linkPath : any; 


    public myOrders : any [] = [

        {
            orderNumber :'#OFGT25682216',
            orderDate : '06/24/2017',
            deliveryDate :'07/20/2017',
            orderStatus : 'Open',
            linkPath : 'https://www.google.co.in/'
        },{
            orderNumber :'#OFGT25682749',
            orderDate : '06/24/2017',
            deliveryDate :'07/20/2017',
            orderStatus : 'Delivered',
            linkPath : 'https://www.google.co.in/'
        },{
            orderNumber :'#OFGT25682749',
            orderDate : '06/24/2017',
            deliveryDate :'07/20/2017',
            orderStatus : 'Closed',
            linkPath : 'https://www.google.co.in/'
        }

    ]

    
    
    
  constructor() { }

  ngOnInit() {
  }

}

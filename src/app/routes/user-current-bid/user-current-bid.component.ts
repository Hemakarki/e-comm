import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-current-bid',
  templateUrl: './user-current-bid.component.html',
  styleUrls: ['./user-current-bid.component.css']
})
export class UserCurrentBidComponent implements OnInit {

@Input('bidInfo') element : {

    productName: string,
    partNumber: number,
    askingPrice: number,
    bidPrice: number,
};

@Input() productName: string;
@Input() partNumber: number;
@Input() askingPrice: number;
@Input() bidPrice: number;

   
public bidInfo: any[] = [
    {
        productName: 'AMP® BATTERY TERMINAL',
        partNumber: '99-810057-651',
        askingPrice: '$9555.00',
        bidPrice:'$8555.00'
    },{
        productName: 'AMP® BATTERY TERMINAL',
        partNumber: '99-810057-651',
        askingPrice: '$9555.00',
        bidPrice:'$8555.00'
    }
]

    
    
  constructor() { }

  ngOnInit() {
  }

}

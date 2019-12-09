import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentMethodComponent implements OnInit {
  
 /* @Input ('productDetial') element:{
    heading:string,
   description:string,
}  


@Input() heading : string;
@Input() description : string;   

*/

/*public productDetail: any[] = [
{
    heading : 'Warranty',
    description : 'Yes, on items for which the seller has given the option to "Make an Offer". When this option is available for an item, the "Make an Offer" button will be displayed. When you click the button you can input the price you would like to propose for the item. The seller will then have 12 hours to respond to the price offer. If the seller accepts your offer, you will be committed to the purchase. You can cancel the offer, while it is still pending the seller response. If the seller does not respond within 12 hours, the offer will be cancelled.',
},{
    heading : 'Documentation',
    description : 'Documentation',
},{
    heading : 'Shipping',
    description : 'Shipping',
},{
    heading : 'Condition',
    description : 'Condition',
},{
    heading : 'Insurance',
    description : 'Insurance',
},{
    heading : 'Terms & Conditions',
    description : 'Terms & Conditions',
}
]*/




  constructor() { }

  ngOnInit() {
  }

}

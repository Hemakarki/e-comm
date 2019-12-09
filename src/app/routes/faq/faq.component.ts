import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FaqComponent implements OnInit {

    public oneAtATime: boolean = true;
    
    
    
    Question = 'What makes eSpares unique?'
    Answer = 'eSpares is the first end-to-end ecommerce marketplace that allows you to complete an order online. All items you see on ePlane exist and are waiting for your order. ePlane offers full transparency and is always online (24/7/365). There are no subscription fees, usage fees or other hidden charges. You can learn more about the unique benefits of buying and selling with ePlane here.'
    
    
    
    
    
  constructor() { }

  ngOnInit() {
  }

}

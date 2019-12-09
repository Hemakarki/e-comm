import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-sync',
  templateUrl: './product-sync.component.html',
  styleUrls: ['./product-sync.component.css']
})
export class ProductSyncComponent implements OnInit {

  
    public productSync : any [] = [

        {
            date :'17/08/2016',
            time : '8:20',
            productImported :'5',
            Status : 'Updated'
        },{
            date :'17/08/2016',
            time : '8:20',
            productImported :'5',
            Status : 'Updated'
        }
    ]
    
    
  constructor() { }

  ngOnInit() {
  }

}

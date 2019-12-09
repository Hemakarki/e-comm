import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
    
     @Input ('myOrder')element:{
        procuctImage:any,
        productName:string,
        fullPayment:string,
        depositPayment:string,
        productDescription:string,

        timeLeft : string,
        totalValue : number; 
    };
    
    @Input() procuctImage:any;
    @Input() productName:string;
    @Input() fullPayment:string;
    @Input() depositPayment:string;
    @Input() productDescription:string;
    @Input() timeLeft : string;

    @Input() totalValue : number = 0;    
        
    public myOrder: any [] = [
        {   
            procuctImage : '../../../assets/images/pro1.png',
            productName : 'SKYTRONICS JASCO. 6560-1 ALTERNATOR KIT',
            fullPayment : '$5245.00',

            depositPayment : '$524.50',
            totalValue : this.totalValue
        },{   
            procuctImage : '../../../assets/images/pro2.png',
            productName : 'BLUE PNEUMATIC POWER SPIN TOOL BP-350QC ',
            fullPayment : '$2345.00',
            depositPayment : '$234.50'
        } 
    ]

     
         
         increment(){
             this.totalValue++
         }
         
         decrement(){
             if(this.totalValue > 0){
                 this.totalValue--
             }else{
                 confirm('do you want to delete it?');
             }
         } 

    
  constructor() { }

  ngOnInit() {
  }


}

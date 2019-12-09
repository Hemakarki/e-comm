import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
    
    activeMenu: boolean = true;
    
     menuOpen(){
         if(this.activeMenu){
             this.activeMenu = false;
         } else{
             this.activeMenu = true;
         }
     };
    
  
    @Input ('wishList')element:{
        procuctImage:any,
        productName:string,
        productPrice:string,
        productDescription:string,
        timeLeft : string,            
    };
    
    @Input() procuctImage:any;
    @Input() productName:string;
    @Input() productPrice:string;
    @Input() productDescription:string;
    @Input() timeLeft : string;
        
    
    public wishList: any [] = [
        {   
            procuctImage : '../../../assets/images/pro1.png',
            productName : 'SKYTRONICS JASCO. 6560-1 ALTERNATOR KIT',
            productPrice : '$5245.00',
            productDescription : 'Honeywell ED800 EFIS Display. Overhauled with a new CRT & in excellent condition. 8130 Tag Dated 05 June 2015 .',
            timeLeft : '10d 15h 13min',
        },{   
            procuctImage : '../../../assets/images/pro2.png',
            productName : 'ACR FLOATING SURVIVAL BAG',
            productPrice : '$99.00',
            productDescription : 'Honeywell ED800 EFIS Display. Overhauled with a new CRT & in excellent condition. 8130 Tag Dated 05 June 2015 .',
            timeLeft : '10d 15h 13min',
        },
        {   
            procuctImage : '../../../assets/images/pro1.png',
            productName : 'SKYTRONICS JASCO. 6560-1 ALTERNATOR KIT',
            productPrice : '$5245.00',
            productDescription : 'Honeywell ED800 EFIS Display. Overhauled with a new CRT & in excellent condition. 8130 Tag Dated 05 June 2015 .',
            timeLeft : '10d 15h 13min',
        },
        {   
            procuctImage : '../../../assets/images/pro2.png',
            productName : 'ACR FLOATING SURVIVAL BAG',
            productPrice : '$99.00',
            productDescription : 'Honeywell ED800 EFIS Display. Overhauled with a new CRT & in excellent condition. 8130 Tag Dated 05 June 2015 .',
            timeLeft : '10d 15h 13min',
        } 
    ]
    
    
    
    
    
    
    
  constructor() { }

  ngOnInit() {
  }

}

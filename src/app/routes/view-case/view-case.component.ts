import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-case',
  templateUrl: './view-case.component.html',
  styleUrls: ['./view-case.component.css']
})
export class ViewCaseComponent implements OnInit {

     @Input ('viewCase') element: {

        caseNumber : number,
        orderNumber : number,
        summary : string,
        status :string,
    }

    @Input() caseNumber : number;
    @Input() orderNumber : number;
    @Input() summary : string;
    @Input() status : string;


    public viewCase : any [] = [

        {
            caseNumber :'5682785',
            orderNumber : '5682785',
            summary :'Part arrived broken. Please help!',
            status : 'Open',
        },{
            caseNumber :'5682785',
            orderNumber : '5682785',
            summary :'Part arrived broken. Please help!',
            status : 'Close',
        }

    ]
       
    
    
    
  constructor() { }

  ngOnInit() {
  }

}

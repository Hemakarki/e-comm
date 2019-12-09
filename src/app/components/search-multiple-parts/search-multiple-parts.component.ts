import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search-multiple-parts',
  templateUrl: './search-multiple-parts.component.html',
  styleUrls: ['./search-multiple-parts.component.css']
})

export class SearchMultiplePartsComponent implements OnInit {
    
    partNumber = 'Hello';
    
    fakeArray = new Array(0);

    arrayNum: number = 0;

    addPart= function(){
        this.fakeArray.push(this.arryNum++);
    }
    
    deleteRow =  function (id:number) {
        var index = this.fakeArray.indexOf(id, 0);
        this.fakeArray.splice(index, 1);
    } 

constructor() { }
    
ngOnInit() { }
}
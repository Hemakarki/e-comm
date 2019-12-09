import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
    
  //  maxlength = '5'
    
    @Input() inputType: string;
    @Input() labelName: string;
    @Input() inputClass: string;
    @Input() typeDisabled: string;
    @Input() maxLength: any;
    
  constructor() { }
    
    

  ngOnInit() {}

}

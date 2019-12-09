import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  constructor() { }
    
     @Input() labelName: string;
 	 @Input() field: string;
 	 @Input() msgname: string;

  ngOnInit() {
  }

}

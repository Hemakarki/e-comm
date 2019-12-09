import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    
   google_plus = 'https://plus.google.com/'
   facebook = 'http://facebook.com/'
   twiter = 'https://twitter.com/'
    
    
  constructor() { }

  ngOnInit() {
  }

}

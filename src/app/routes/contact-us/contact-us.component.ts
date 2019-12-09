import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactusService } from './contactus-service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  providers: [ContactusService],
  encapsulation: ViewEncapsulation.None
})

export class ContactUsComponent implements OnInit {

  onSubmit(value: any) {
   // this._contactInfo.postUserInfo(value).subscribe(result => console.log(result)); this kind of res to get from backend
  }
  
  constructor(private _contactInfo: ContactusService) {
  }

  ngOnInit() { 
    // this._user.getUsers()
    //   .subscribe(data => data);
  }
}
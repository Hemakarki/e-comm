import { Component, OnInit } from '@angular/core';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router'
@Component({
  selector: 'app-vendor-sidebar-menu',
  templateUrl: './vendor-sidebar-menu.component.html',
  styleUrls: ['./vendor-sidebar-menu.component.css']
})

export class VendorSidebarMenuComponent implements OnInit {
      activeMenu: boolean = true;

     menuOpen(){
         if(this.activeMenu){
             this.activeMenu = false;
         } else{
             this.activeMenu = true;
         }
     };
    
  constructor(private _router:Router) { }

  ngOnInit() {
  }

logout(){
  Cookie.deleteAll();
  this._router.navigate(['/']);
  location.reload();
}
}

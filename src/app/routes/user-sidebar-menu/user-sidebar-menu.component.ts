import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { sidebarService } from './user-sidebar-menu.service';
import { Router } from "@angular/router"
@Component({
  selector: 'app-user-sidebar-menu',
  templateUrl: './user-sidebar-menu.component.html',
  styleUrls: ['./user-sidebar-menu.component.css'],
  providers: [sidebarService],
  encapsulation: ViewEncapsulation.None
})
export class UserSidebarMenuComponent implements OnInit {

    activeMenu: boolean = true;
    public user_img ;
 	public files ;
	public filesToUpload: Array<File> = [];
     menuOpen(){
         if(this.activeMenu){
             this.activeMenu = false;
         } else{
             this.activeMenu = true;
         }
     };


  constructor(private _router: Router,private _sidebarInfo: sidebarService) { }

  ngOnInit() {
  }
  logout(){
    Cookie.deleteAll();
        location.reload();
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files[0], "files[0]" );
    let imagedata= files[0];
    this._sidebarInfo.postupdatedImage(imagedata).subscribe(result => console.log(result))
     }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.user_img = fileInput.target.files[0]['name'];
    console.log(this.user_img, "name")
  }
}

import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { VendorDashboardService } from './vendor-dashboard.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css'],
  providers:[VendorDashboardService,ToasterService]
})
export class VendorDashboardComponent implements OnInit {
 private id = ''; 
 public vendor = {};
 public isModalShown : boolean =false;
 public msg='';
 public success= false;
 public errors=false;
 public error='';
 public message='';
 public updatePassword = false;
 @ViewChild('autoShownModal') public autoShownModal: ModalDirective;

constructor(private vendorDashboardService:VendorDashboardService, private router:Router, private toasterService:ToasterService) { }

  ngOnInit() {
  	this.id =Cookie.get('token');
  	if(this.id){
  		this.getVendorDetail(this.id);
  	} else {
  	this.toasterService.pop('error', "user does not exists, please login again");
  	 this.router.navigate(['/']);
  	}
  }

  getVendorDetail(detailId){
  	this.vendorDashboardService.getRecordById(detailId).subscribe(result => {
  		if(result.success){
  		this.vendor = result.data;
  		} else {
  			this.toasterService.pop('error', result.error.message);
  		} 
  	}, err => {
  		this.toasterService.pop('error', err);
  	})
  } 

  onSubmit(vendorForm){
  if(vendorForm.valid){
  this.vendorDashboardService.editRecord(this.vendor).subscribe(result => {
  if(result.success){
    this.toasterService.pop('success', "Updated successfully");
    this.getVendorDetail(result.data.id);
  } else {
    this.toasterService.pop('error', result.error.message);
  }
  }, err => {
    this.toasterService.pop('error', err);
  })
  } else {
  return false;
  }
 
  }

  showModal(){
 this.success= false;
this.errors=false;
this.error='';
this.message='';
this.updatePassword = false;
  	this.isModalShown=true;
  	this.msg='';
  }

  onHidden(){
  	this.isModalShown=false;
  }

  hideModal(){
  	this.autoShownModal.hide();
  }

  changePassword(pwd) {
    pwd['id'] = this.id
    if(this.updatePassword){
      this.vendorDashboardService.putNewPassword(pwd).subscribe(result => {
      if (result.status) {
       this.msg='';
      this.success= true ;
      this.updatePassword=false;
        this.message= result.success.message;
        this.isModalShown=false;
        this.toasterService.pop('success', 'Password changed successfully');  
      } else {
        this.errors= true ;
        this.error= result.error.message; 
      }
    }, err => {
    	this.errors= true ;
        this.error= err.message; 
    });
    }
  }
  
  checkpwd(pwd) {
  this.updatePassword=false;
  if(pwd.newpassword == '' && pwd.confpassword == '') {
  		this.msg = "";
  } else if(pwd.newpassword == '' && pwd.confpassword != ''){
  	this.msg = "Passwords do not match"
  } else if(pwd.newpassword != '' && pwd.confpassword == ''){
  	this.msg = ""
  }else if(pwd.newpassword === pwd.confpassword) {
  this.updatePassword=true;
     this.msg = "Passwords match"
  } else {
  this.msg = "Passwords do not match"
  }
  }
}
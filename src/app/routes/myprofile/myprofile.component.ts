import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { profileService } from './myprofile.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ToasterContainerComponent, ToasterService } from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FileUploader } from 'ng2-file-upload';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ImageResult, ResizeOptions } from 'ng2-imageupload';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css'],
  providers: [profileService, Cookie, ToasterService]
})

export class MyprofileComponent implements OnInit {
  public userDetails = {
    address: [],
    shippingaddress: []
  }
  src: string = "";
  resizeOptions: ResizeOptions = {
    resizeMaxHeight: 128,
    resizeMaxWidth: 128
  };
  public user_img;
  public files;
  headers: Headers;
  options: RequestOptions;
  fileOptions: RequestOptions;
  fileHeaders: Headers;
  public markShippingDetail = false;
  public isLoading: boolean = false;
  activeMenu: boolean = true;
  public id = ''
  public editAddress = false;
  private toasterService: ToasterService;
  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown: boolean = false;
  public imageUploadModalshown = false;
  public bool: boolean = false;
  public bool2: boolean = false;
  public updateval: boolean = false;
  public showForm: boolean = true;
  public msg = '';
  public updateAddressIndex = 0;
  public addressInfo = {};
  public message = "";
  public error = "";
  public errors: boolean = false;
  public success: boolean = false;
  public filesToUpload: Array<File> = [];

  public updatePassword: boolean = false;

  constructor(private _userInfo: profileService, private http: Http, private _activateRouter: ActivatedRoute, toasterService: ToasterService, private _cookieService: Cookie, private _router: Router) {
    this.toasterService = toasterService;
  }

  popToast() {
    this.toasterService.pop('success', 'Args Title', 'Args Body');
  }

  ngOnInit() {
    this.markShippingDetail = false
    this.id = this.getCookie('token');
    if (this.src == "") {
      this.src = "./assets/images/dummyimg.png";
    }
    if (this.id) {
      this.getParticularUserInformation(this.id);
    } else {
      alert("user does not exists, please login again")
    }
  }

  getParticularUserInformation(id) {
    this._userInfo.getParticularUserInfo(this.id).subscribe(result => {
      this.userDetails = result.data;
      if (this.userDetails.address) {
        if (this.userDetails.address.length === 0) {
          this.userDetails['address'] = [{}];
          this.userDetails['address'][0]['country'] = '';
        }
      } else {
        this.userDetails['address'] = [{}];
        this.userDetails['address'][0]['country'] = '';
      }
      if (this.userDetails.shippingaddress) {
        if (this.userDetails.shippingaddress.length === 0) {
          this.userDetails['shippingaddress'] = [];
        } else {
          var firstdel = Object.assign({}, this.userDetails['address'][0])
          delete firstdel["fullName"]
          var indexvalue = this.checkIfAddressExist(firstdel)
          if (indexvalue >= 0) {
            this.markShippingDetail = true
          } else {
            this.markShippingDetail = false
          }
        }
      } else {
        this.userDetails['shippingaddress'] = [];
      }
    });
  }

  onSubmit(value) {
    console.log(value);
    this._userInfo.postupdatedInfo(this.userDetails).subscribe(result => {
      if (result.status == true) {
        this.toasterService.pop('success', 'Updated successfully');
        this.getParticularUserInformation(this.id)
      }
    });
  }

  check(value) {
    var indexvalue = this.checkIfAddressExist(this.userDetails.address[0]);
    if (indexvalue >= 0) {
      if (!value) {
        this.userDetails.shippingaddress.splice(indexvalue, 1);
      } else {
        this.markShippingDetail = true
      }
    } else {
      if (value) {
        var shippingAddress = {
          "fullName": this.userDetails['fullName'] ? this.userDetails['fullName'] : this.userDetails['firstName'] + ' ' + this.userDetails['lastName'],
          "street": this.userDetails.address[0]["street"],
          "city": this.userDetails.address[0]["city"],
          "country": this.userDetails.address[0]["country"],
          "state": this.userDetails.address[0]["state"],
          "zip": this.userDetails.address[0]["zip"],
          "phone": this.userDetails.address[0]["phone"]
        }
        this.userDetails['shippingaddress'].push(shippingAddress)
      }
    }
    this.markShippingDetail = value
  }

  updateShippingAddress(indexid) {
    this.userDetails.shippingaddress.splice(indexid, 1);
    let updateshippingAddress = {
      id: this.id,
      shippingaddress: this.userDetails['shippingaddress']
    }
    this._userInfo.postupdatedInfo(updateshippingAddress).subscribe(result => {
      if (result.status == true) {
        this.toasterService.pop('success', 'Added successfully');
        this.getParticularUserInformation(this.id)
      }
    });
    this.showForm = false;
    setTimeout(() => {
      this.showForm = true;
    });
    this.activeMenu = true;
  }

  checkIfAddressExist(checkaddress) {
    var indexvalue = this.userDetails.shippingaddress.findIndex(data => {
      var shipadd = Object.assign({}, data);
      delete shipadd['fullName'];
      console.log(shipadd)
      console.log(checkaddress)
      // if (JSON.stringify(shipadd) === JSON.stringify(checkaddress)) {
      if ((shipadd['street'] == checkaddress['street']) && (shipadd['country'] == checkaddress['country']) && (shipadd['city'] == checkaddress['city']) && (shipadd['state'] == checkaddress['state'])) {
        return true;
      } else {
        return false;
      }
    })
    return indexvalue;
  }

  showModal() {
    this.success = false;
    this.errors = false;
    this.error = '';
    this.message = '';
    this.updatePassword = false;
    this.isModalShown = true;
    this.msg = '';
  }

  public hideModal(): void {
    this.autoShownModal.hide();
  }

  public onHidden(): void {
    this.isModalShown = false;
    this.imageUploadModalshown = false;
  }
  public imageUploadModal(): void {
    this.imageUploadModalshown = true;
  }

  addAddress() {
    this.updateval = false;
    this.addressInfo = {}
    this.addressInfo['country'] = '';
    if (this.activeMenu) {
      if (this.editAddress) {
        this.activeMenu = true;
      } else {
        this.activeMenu = false;
      }
    } else {
      if (this.editAddress) {
        this.activeMenu = false;
      } else {
        this.activeMenu = true;
      }
    }
    this.editAddress = false;
  }

  addnewAddress(value) {
    var firstdel = Object.assign({}, value.shippingAddress2)
    delete firstdel["fullName"]
    var indexvalue = this.checkIfAddressExist(firstdel)
    if (indexvalue >= 0) {
      if (this.editAddress) {
        this.userDetails['shippingaddress'][this.updateAddressIndex] = value.shippingAddress2
        msg = "updated successfully"
        let updateshippingAddress = {
          id: this.id,
          shippingaddress: this.userDetails['shippingaddress']
        }
        this._userInfo.postupdatedInfo(updateshippingAddress).subscribe(result => {
          if (result.status == true) {
            this.toasterService.pop('success', msg);
            this.showForm = false;
            this.activeMenu = true;
            setTimeout(() => {
              this.showForm = true;
            });
            this.getParticularUserInformation(this.id)
          }
        })
      } else {
        this.toasterService.pop('error', 'Address already exist');
      }

    } else {
      var msg = '';
      if (this.editAddress) {
        this.userDetails['shippingaddress'][this.updateAddressIndex] = value.shippingAddress2
        msg = "updated successfully"
      } else {
        this.userDetails['shippingaddress'].push(value.shippingAddress2)
        msg = 'Added successfully';
      }
      let updateshippingAddress = {
        id: this.id,
        shippingaddress: this.userDetails['shippingaddress']
      }
      this._userInfo.postupdatedInfo(updateshippingAddress).subscribe(result => {
        if (result.status == true) {
          this.toasterService.pop('success', msg);
          this.getParticularUserInformation(this.id)
        }
      });
      this.showForm = false;
      setTimeout(() => {
        this.showForm = true;
      });
      this.activeMenu = true;
    }
  }

  updateAddress(indexid) {
    this.updateAddressIndex = indexid;
    var updateadd = this.userDetails.shippingaddress.slice(indexid, indexid + 1);
    this.addressInfo = Object.assign({}, updateadd[0])
    this.updateval = false;
    this.editAddress = true;
    this.activeMenu = false;
  }

  removeAddress(indexid) {
    if (confirm('Are you sure to want to delete address')) {
      this.userDetails.shippingaddress.splice(indexid, 1);
      let updateshippingAddress = {
        id: this.id,
        shippingaddress: this.userDetails['shippingaddress']
      }
      this._userInfo.postupdatedInfo(updateshippingAddress).subscribe(result => {
        if (result.status == true) {
          this.toasterService.pop('success', 'Deleted successfully');
          this.activeMenu = true;
          this.addressInfo = {}
          this.getParticularUserInformation(this.id)
        }
      });
    }
  }

  getCookie(key: string) {
    return Cookie.get(key);
  }

  changePassword(pwd) {
    pwd['id'] = this.id
    if (this.updatePassword) {
      this._userInfo.putNewPassword(pwd).subscribe(result => {
        if (result.status) {
          this.msg = '';
          this.success = true;
          this.updatePassword = false;
          this.message = result.success.message;
          this.isModalShown = false;
          this.toasterService.pop('success', 'Password changed successfully');
        } else {
          this.errors = true;
          this.error = result.error.message;
        }
      }, err => {
        this.errors = true;
        this.error = err.message;
      });
    }
  }

  checkpwd(pwd) {
    this.updatePassword = false;
    if (pwd.newpassword == '' && pwd.confpassword == '') {
      this.msg = "";
    } else if (pwd.newpassword == '' && pwd.confpassword != '') {
      this.msg = "Passwords do not match"
    } else if (pwd.newpassword != '' && pwd.confpassword == '') {
      this.msg = ""
    } else if (pwd.newpassword === pwd.confpassword) {
      this.updatePassword = true;
      this.msg = "Passwords match"
    } else {
      this.msg = "Passwords do not match"
    }
  }

  // image section

  //file upload event  

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files[0], "files[0]");
    let imagedata = files[0];
    this._userInfo.postupdatedImage(imagedata).subscribe(result => console.log(result))
    //this.http.post('http://localhost:4076/users/upload/'+files[0]['name'], files[0]['name'])
    //.map(files => files.json())
    //.subscribe(files => console.log('files', files))


    //let headers = new Headers;
    //return this.http.post(this.host + this.apiUrl, data, { headers: headers})
    //  .map((response: Response) => (response.json())); 
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.user_img = fileInput.target.files[0]['name'];
    console.log(this.user_img, "name")
  }








  selected(imageResult: ImageResult) {
    this.src = imageResult.resized
      && imageResult.resized.dataURL
      || imageResult.dataURL;
  }

  onChange(event) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'q=0.8;application/json;q=0.9'
    });

    this.options = new RequestOptions({ headers: this.headers });
    //fileupload==============
    this.fileHeaders = new Headers({
      'Content-Type': 'multipart/form-data'
    });
    this.fileOptions = new RequestOptions({ headers: this.fileHeaders });
    // this.uploader = new FileUploader({ url: 'http://localhost:4076/users/update' });
    this.files = event.srcElement.files;
    this.user_img = event.target.value;
    let updateuser_img = {
      id: this.id,
      user_img: this.files
    }
    this._userInfo.postupdatedInfo(updateuser_img).subscribe(result => {
      console.log(result, "this is the result");
    });
  }
  // end of immage section

}
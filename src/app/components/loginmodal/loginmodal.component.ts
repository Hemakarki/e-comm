import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { LoginService } from './login-service';
import { Http, Response } from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css'],
  providers: [LoginService]
})

export class LoginmodalComponent implements OnInit {
  data;
  errors={};
  username;
  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;

  constructor(private _router : Router, private _loginInfo: LoginService, private _cookieService: Cookie) { }

    public hideModal(): void {
        this.autoShownModal.hide();
    }

  onSubmit(value: any) {
  console.log(value.loginInfo)
    this._loginInfo.postuserInfo(value.loginInfo).subscribe(
      result => {
      result.data['isActive'] = true
        if (result.success == false) {
          this.errors = result.error
          this.data = false;
        } else if(result.data.isActive) {
          this.data = result;
          this.errors = false;
         this.setCookie('token', result.data.id);
         this.setCookie('role', result.data.roles);
         location.reload();
        } else{
          this.errors['message']= "Your account is Deactive . Please mail to espares.@espares.com"
        }
      });
  }

  setCookie(key: string, value: string) {
    return Cookie.set(key, value);
  }

  // @Input() inputType: string;
  // @Input() labelName: string;
  // @Input() inputClass: string;

  ngOnInit() { }

  public forgotPassordModal(): void {
    alert("forgot password");
  }
}
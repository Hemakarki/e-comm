import { Component, OnInit, Input } from '@angular/core';
import { SignupService } from './signup-service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
//import { AuthService } from "angular4-social-login";
//import { SocialUser } from "angular4-social-login";
//import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";


@Component({
  selector: 'app-signupmodal',
  templateUrl: './signupmodal.component.html',
  styleUrls: ['./signupmodal.component.css'],
  providers: [SignupService]
})
export class SignupmodalComponent implements OnInit {
  data;
  errors;

  @Input() OnlyNumber: boolean;

  onSubmit(value: any) {
    this._signupInfo.postsignupInfo(value.registeredInfo).subscribe(
      result => {
        if (result.success == false){
           this.errors= result.error
           this.data= false;
          }else{
            this.data = result;
            this.errors= false ;
            location.reload();
          }
      });
    }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  //user: SocialUser;
  constructor(private _signupInfo: SignupService /*,private authService: AuthService*/) { }

  // constructor( private _signupInfo: SignupService, private _toasterService: Toaster_Token)  { this._toasterService.success('This works');}

   ngOnInit() {
   /* this.authService.authState.subscribe((user) => {
      this.user = user;
    });*/
  }
/*signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      this.user = user;
    });
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }*/

  close(show, hide) {
    hide.hide();
    show.show();
  }
}
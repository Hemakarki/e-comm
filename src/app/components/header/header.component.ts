import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { HeaderService } from './header-service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
/*import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";*/

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [HeaderService]
})
export class HeaderComponent implements OnInit {
    data;
    errors;
    public token: boolean = false;
    public role = '';
    // user : SocialUser;
    @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
    @ViewChild('signupModal') public signupModal: ModalDirective;
    @ViewChild('autoForgotShownModal') public autoForgotShownModal: ModalDirective;
    public isForgotModalShown: boolean = false;
    public isModalShown: boolean = false;
    public isSignupModalShown: boolean = false;

    dropDownValue: any = 'All';

    dropDownlanValue: any = 'EN';



    constructor(private _router: Router, private userInfo: HeaderService, private _cookieService: Cookie /*, private authService: AuthService*/) {
    }
    public forgotPasswordModal(): void {
        this.hideModal();
        this.isForgotModalShown = true;
    }
    public hideForgotModal(): void {
        // this.showModal();
        this.autoForgotShownModal.hide();
    }

    public onForgotHidden(): void {
        this.isForgotModalShown = false;
    }
    public showModal(): void {
        this.isModalShown = true;
    }
    public opensignup(): void {
        this.isModalShown = false;
        this.isSignupModalShown = true;
    }
    public hideModal(): void {

        this.autoShownModal.hide();
    }

    public hideSignupmodal(): void {
        this.signupModal.hide();
        this.showModal();
    }

    public closeSignupmodal(): void {
        this.signupModal.hide();
    }

    public onHidden(): void {
        this.isModalShown = false;
    }

    public onSignupHidden(): void {
        this.isSignupModalShown = false;
    }

    ngOnInit() {
        let tokenVal = this.checkcookie('token');
        this.role = this.checkcookie('role');
        if (tokenVal) {
            this.token = true;
        }
        /* this.authService.authState.subscribe((user) => {
       this.user = user;
     });*/

    }

    onSubmit(value: any) {
        this.userInfo.postuserInfo(value).subscribe(result => {
            if (result.success == false) {
                this.errors = result.error
                this.data = false;
            } else {
                this.data = result.data;
                this.errors = false;
            }
        });
    }


    dropDownList: any[] = [
        {
            value: 'All'
        },
        {
            value: 'Brand'
        },
        {
            value: 'Top Products'
        }
    ];

    dropDownLang: any[] = [
        {
            value: 'EN'
        },
        {
            value: 'HB'
        },
        {
            value: 'CH'
        }
    ];

    checkcookie(key: string) {
        return Cookie.get(key);
    }
    public logout(): void {
        //this.authService.signOut();
        Cookie.deleteAll();
        this._router.navigate(['/']);
        location.reload();
    }



}

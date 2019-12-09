import { Component, OnInit } from '@angular/core';
// import { AuthenticationService } from './shared/services/authentication.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Cookie]
})
export class AppComponent {
  title = 'app';
  constructor(private _cookieService: Cookie, private router: Router ) {
    /*  this.setCookie('cookieName3', 'cookieValue3');
      this.setCookie('cookieName4', 'cookieValue4');
      let myCookie = this.getCookie('cookieName3');
      this.deleteCookie('cookieName4');
      this.deleteAllCookie();
      let allCookie = this.getAllCookie();*/
  }
  /*deleteCookie(cookieName) {
    return Cookie.delete(cookieName);
  }
  deleteAllCookie() {
    return Cookie.deleteAll();
  }
  getAllCookie() {
    return Cookie.getAll();
  }
  setCookie(key: string, value: string) {
    return Cookie.set(key, value);
  }
  getCookie(key: string) {
    return Cookie.get(key);
  }*/

 ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }


  public onDeactivate() {
    document.body.scrollTop = 0;
  }

}

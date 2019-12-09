import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class DeactiveRouteGuard implements CanActivate {

  constructor(private router: Router, private _cookieService: Cookie) { }

  canActivate() {

    let token = this.getCookie('token');

    if (token != null) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }
  getCookie(key: string) {
    return Cookie.get(key);
  }
}
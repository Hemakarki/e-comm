import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as constant from '../../shared/constants';

@Injectable()

export class ContactusService {
	public host = constant.baseUrl;

    constructor(private http: Http) { }

     postUserInfo(data): Observable<any> {
        return this.http.post( this.host + '/user/create',data, {})
            .map((response: Response) => response.json());
    }
}
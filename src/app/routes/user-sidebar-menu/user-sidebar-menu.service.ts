import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import * as constant from '../../shared/constants';
@Injectable()
export class sidebarService {

constructor(private http: Http) { }

	public host = constant.baseUrl;

	postupdatedImage(data): Observable<any>{
	console.log(data, "data at service")
		let headers = new Headers;
		// let token   = Cookie.get(key);
		return this.http.put( this.host + '/users/upload/',{'data': data.name, type:data.type},{ headers: headers})
		 .map ((response: Response) =>(response.json()));	 
	};
}
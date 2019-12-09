import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import * as constant from '../../shared/constants';

@Injectable()

export class HeaderService {

   public host = constant.baseUrl;
	public apiUrl = constant.API_FORGOTPASSWORD_URL;// dummy url

	constructor(private http: Http) { }
	
	postuserInfo(data): Observable<any> {
		let headers = new Headers;
		return this.http.post(this.host + this.apiUrl, data, { headers: headers })
			.map((response: Response) =>(response.json()));
	}
}
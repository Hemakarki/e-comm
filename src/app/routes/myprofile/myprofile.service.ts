import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { API_SIGNUP_URL } from '../../shared/urls';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import * as constant from '../../shared/constants';

@Injectable()

export class profileService {
constructor(private http: Http) { }

	public host = constant.baseUrl;
	public apiUrl = constant.API_REGISTER_URL;
	public updateUrl = constant.API_UPDATEUSER_URL;
	public addressUrl =constant.API_ADDADDRESS_URL;

	putuserInfo(data): Observable<any> {
       	let headers = new Headers;
        return this.http.post(this.host + this.apiUrl, data, { headers: headers})
	    .map((response: Response) => (response.json())); 	            
	};	

	getParticularUserInfo(id):Observable<any> {
	let headers =new Headers;
	return this.http.get(this.host+'/user/'+id,{ headers: headers})
	.map((response: Response) => (response.json()))
	}
	
	putNewPassword(data): Observable<any> {
       	let headers = new Headers;
        return this.http.put(this.host +'/users/changePassword', data, { headers: headers})
	    .map((response: Response) => (response.json())); 	            
	};	
	postupdatedInfo(data): Observable<any>{
		let headers = new Headers;
		// let token   = Cookie.get(key);
		return this.http.put( this.host + '/users/'+data.id,data,{ headers: headers})
		 .map ((response: Response) =>(response.json()));	 
	};

	postupdatedImage(data): Observable<any>{
	console.log(data, "data at service")
		let headers = new Headers;
		// let token   = Cookie.get(key);
		return this.http.put( this.host + '/users/upload/',{'data': data.name, type:data.type},{ headers: headers})
		 .map ((response: Response) =>(response.json()));	 
	};


	addnewAddress( data,id ): Observable<any> {
		let headers = new Headers;	
		let data2 = {
			data: data,
			id: id
		}
		// let token   = Cookie.get(key);
		return this.http.put( this.host + this.addressUrl, data2,{ headers: headers})
		 .map ((response: Response) =>(response.json()));
	}

	// postaddressInfo(shippingAddress,id):  Observable<any>{
	// 	let headers = new Headers;
	// 	let data1 = {
	// 		data: shippingAddress,
	// 		id: id
	// 	}
	// 	// let token   = Cookie.get(key);
	// 	return this.http.put( this.host + this.addressUrl,data1,{ headers: headers})
	// 	 .map ((response: Response) =>(response.json()));		 
	// }
	
 // update(user): Observable<any> {
 //        let headers         = new Headers();   
 //        headers.append('Authorization', this._accessToken);
 //        return this.http.put(this.host +this.updateUrl+ user.id, user, { headers: headers })
 //        .map((response:Response) => response.json())
 //    }
}
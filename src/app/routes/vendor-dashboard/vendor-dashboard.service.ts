import { Injectable } from '@angular/core';
import { Http , RequestOptions, Headers , Response} from '@angular/http';
import * as constant from '../../shared/constants';

@Injectable()

export class VendorDashboardService {
	constructor(private http:Http){ }
	public host = constant.baseUrl;

	getHeaders(){
	let headers = new Headers();
	let options = new RequestOptions({headers:headers});
	return options;
	}

	getRecordById(id){
	return this.http.get(this.host+'/user/'+id,this.getHeaders()).map((res:Response) => res.json())
	}

	editRecord(field) {
	 return this.http.put(this.host+'/user/'+field.id,field,this.getHeaders()).map((res:Response) => res.json());
	}

	putNewPassword(data) {
        return this.http.put(this.host +'/users/changePassword', data, this.getHeaders())
	    .map((res: Response) => res.json()); 	            
	};	
}
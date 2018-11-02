import { HttpClient, HttpHeaders, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { AppConfig } from "../app.config";

@Injectable()
export class AppService {
	public userApiData = {};
	private config : AppConfig = new AppConfig()
	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json'
	  	})
	};
	constructor(private http : HttpClient){}
	register(data) : any {
		return this.http.post(this.config.apiUrl+'register', data, this.httpOptions);
	}

	login(data): any {
		return this.http.post(this.config.apiUrl+'login', data, this.httpOptions);
	}
	
	carsData(data): any {
		return this.http.post("http://search-trv-maruti-vs22kop2frgmrn4aqnd76p4mou.ap-southeast-1.es.amazonaws.com/mstvcars8/cars7/_search", data, this.httpOptions)
	}

	getuser(id): any {
		return this.http.get(this.config.apiUrl+'user/'+ id, this.httpOptions);
	}

}
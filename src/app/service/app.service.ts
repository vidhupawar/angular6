import { HttpClient, HttpHeaders, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { AppConfig } from "../app.config";

@Injectable()
export class AppService {
	private config : AppConfig = new AppConfig()
	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json',
			'Authorization': 'my-auth-token'
	  	})
	};
	constructor(private http : HttpClient){}
	register(data) : any {
		console.log("this.config", this.config)
		return this.http.post(this.config.apiUrl+'register', data, this.httpOptions)
		.pipe(first())
		.subscribe(
			data => { 
				console.log("data", data)               
			},
			error => {
			});
	}

	login(data): any {
		return this.http.post(this.config.apiUrl+'login', data, this.httpOptions)
		.pipe(first())
		.subscribe(
			data => { 
				console.log("data", data)               
			},
			error => {
			});
	}
}
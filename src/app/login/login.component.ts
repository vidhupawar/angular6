import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AppService } from "../service/app.service";

@Component({
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
	public loginData: any = {};
	constructor(
		private service: AppService,
		private router: Router
	) {}

	ngOnInit() {
	   
	}	

	onLogin(isValid) {
		if(isValid){

			console.log("submit", this.loginData)
			this.service.login(this.loginData);
			this.router.navigate(['/dashboard']);
		}

	}
}

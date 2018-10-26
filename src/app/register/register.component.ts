import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';
import { AppService } from "../service/app.service";

@Component({
	templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
	public model: any = {};
	
	constructor(
		private service: AppService,
		private router: Router
	) {}

	ngOnInit() {
	   
	}	

	onSubmit() {
		console.log("submit", this.model)
		this.service.register(this.model);
		this.router.navigate(['/dashboard']);
	}
}

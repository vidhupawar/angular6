import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AppService } from "../service/app.service";
import { TransferService } from "../service/transfer.service";


@Component({
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
	public loginData: any = {};
	constructor(
		private service: AppService,
		private router: Router,
		private transferService: TransferService
	) {}

	ngOnInit() {}

	onLogin(isValid) {
		if(isValid){
			this.service.login(this.loginData).subscribe((res: any) => {
				if(res.token){
					this.transferService.userService = res.result[0];
					localStorage.setItem("user", JSON.stringify(res.result[0]));
					// this.router.navigate(['/dashboard'], {id: res.result[0]._id});
					this.router.navigate(['/dashboard']);
				}
			})
		}
	}
}

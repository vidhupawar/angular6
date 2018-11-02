import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { first } from 'rxjs/operators';
import { AppService } from "../service/app.service";
import { TransferService } from "../service/transfer.service";

@Component({
	templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
	public model: any = {};
	
	constructor(
		private service: AppService,
		private router: Router,
		private transferService: TransferService
	) {}

	ngOnInit() {}

	onSubmit() {
		this.service.register(this.model).subscribe((res: any) => {
			if(res.token){
				this.transferService.userService = res.result[0];
				localStorage.setItem("user", JSON.stringify(res.result[0]));
				// this.router.navigate(['/dashboard', {id: res.result[0]._id}]);
				this.router.navigate(['/dashboard']);
			}
		})
	}
}

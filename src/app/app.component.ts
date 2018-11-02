import { Component } from '@angular/core';
import { AppService } from "./service/app.service";
import { TransferService } from "./service/transfer.service";

@Component({
  selector: 'app-root', 
  // selector: ['app-root'], // div app-root
  // selector: '.app-root', //div class="app-root"
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    private service: AppService,
    private transferService: TransferService
  ) { }
  public loggedInUser = localStorage.getItem("user");
  public checkLocation = (window.location.pathname).split("/")[1];
  sliderImages = ["https://i.stack.imgur.com/EUs9p.png",
  					"https://i.stack.imgur.com/EUs9p.png",
  					"https://i.stack.imgur.com/EUs9p.png"]

	logoutUser() {
		console.log("in logout")
		localStorage.removeItem("user")
		localStorage.removeItem("token")
		this.transferService.userService = {}
	}
  
}


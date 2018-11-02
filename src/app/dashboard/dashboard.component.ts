import { Component, OnInit } from '@angular/core';
import { AppService } from "../service/app.service";
import { TransferService } from "../service/transfer.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user ;

  constructor(
    private service: AppService,
    private transferService: TransferService
  ) { }

  ngOnInit() {
    this.user = this.transferService.userService;
    if(Object.keys(this.user) && !Object.keys(this.user).length){
      this.callUser()
    }
  }

  private callUser() {
    this.service.getuser(JSON.parse(localStorage.getItem("user"))._id).subscribe((res: any) => {
      this.user = res.user[0]
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DonateService } from '../donate.service';

@Component({
  selector: 'app-donationdashboard',
  templateUrl: './donationdashboard.component.html',
  styleUrls: ['./donationdashboard.component.css']
})
export class DonationdashboardComponent implements OnInit {
  donatedata=[]

  constructor(
    public _authService: AuthService,
    private donate: DonateService,
  ) { }

  ngOnInit(): void {
    if(this._authService.getToken()){
      this._authService.getUserId().subscribe((data)=>{
        this.donate.getdonate(data)
          .subscribe(
            (res:any) => {
              this.donatedata=res
              console.log(res);
            });
          })
       }
    }
  }
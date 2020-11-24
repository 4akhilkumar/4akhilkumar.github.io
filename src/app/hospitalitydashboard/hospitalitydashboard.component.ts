import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BookhospitalityService } from '../bookhospitality.service';

@Component({
  selector: 'app-hospitalitydashboard',
  templateUrl: './hospitalitydashboard.component.html',
  styleUrls: ['./hospitalitydashboard.component.css']
})
export class HospitalitydashboardComponent implements OnInit {
  
bookhospitalitydata=[]
  constructor(
    public _authService: AuthService,
    private bookhospitality: BookhospitalityService,
  ) { }

  ngOnInit(): void {
    if(this._authService.getToken()){
      this._authService.getUserId().subscribe((data)=>{
        this.bookhospitality.getbooking(data)
          .subscribe(
            (res:any) => {
              this.bookhospitalitydata=res
              console.log(res);
        });
      })
    }
  }
}
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BooktourService } from '../booktour.service';

@Component({
  selector: 'app-tourdashboard',
  templateUrl: './tourdashboard.component.html',
  styleUrls: ['./tourdashboard.component.css']
})
export class TourdashboardComponent implements OnInit {
  booktourdata=[]

  constructor(
    public _authService: AuthService,
    private booktour: BooktourService,
  ) { }

  ngOnInit(): void {
    if(this._authService.getToken()){
      this._authService.getUserId().subscribe((data)=>{
        this.booktour.getbooking(data)
          .subscribe(
            (res:any) => {
              this.booktourdata=res
              console.log(res);
            });
          })
       }
    }
  }
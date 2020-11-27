import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { BooktravelService } from '../booktravel.service';

@Component({
  selector: 'app-traveldashboard',
  templateUrl: './traveldashboard.component.html',
  styleUrls: ['./traveldashboard.component.css']
})
export class TraveldashboardComponent implements OnInit {
  booktraveldata=[]

  constructor(
    public _authService: AuthService,
    private booktravel: BooktravelService,
  ) { }

  ngOnInit(): void {
    if(this._authService.getToken()){
      this._authService.getUserId().subscribe((data)=>{
        this.booktravel.getbooking(data)
          .subscribe(
            (res:any) => {
              this.booktraveldata=res
              console.log(res);
        });
      })
    }
  }
}
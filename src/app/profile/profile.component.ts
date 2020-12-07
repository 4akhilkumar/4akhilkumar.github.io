import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth:AuthService, private _router: Router,private snackbar:MatSnackBar) { }

  registerUserData={
    name:new FormControl(''),
    dob:new FormControl(''),
    gender:new FormControl(''),
    phone:new FormControl(''),
    email:new FormControl(''),
    addr:new FormControl(''),
    city:new FormControl(''),
    pincode:new FormControl(''),
  }

  ngOnInit(): void {
    this.auth.getUserId().subscribe((res)=>{
      this.auth.getProfile(res).subscribe((data:any)=>{      
        this.registerUserData.name.setValue(data.name);
        this.registerUserData.dob.setValue(data.dob);
        this.registerUserData.gender.setValue(data.gender);
        this.registerUserData.phone.setValue(data.phone);
        this.registerUserData.email.setValue(data.email);
        this.registerUserData.addr.setValue(data.addr);
        this.registerUserData.city.setValue(data.city);
        this.registerUserData.pincode.setValue(data.pincode);
      })
    });
  }

  // Deleteprofile(){
  //   this.auth.getUserId().subscribe((res)=> {
  //     this.auth.deleteaccount(res).subscribe(()=>{
  //       this.auth.logoutUser()
  //       this._router.navigate(['/welcome'])
  //       this.snackbar.open('Your WhiN Account is Deleted', 'Okay!', {
  //         duration: 4000,
  //       });
  //     })
  //   })
  // }

}
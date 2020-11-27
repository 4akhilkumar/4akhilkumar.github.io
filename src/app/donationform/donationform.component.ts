import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DonateService } from '../donate.service';

@Component({
  selector: 'app-donationform',
  templateUrl: './donationform.component.html', 
  styleUrls: ['./donationform.component.css']
})
export class DonationformComponent implements OnInit {
  hide=true;
  registerUserData = {userid:null, money:"", name:"", phone:"", email: "", lplace:""}

  registerData={
    money:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    lplace:new FormControl('',[Validators.required]),
  }

  getMessageEmail() {
    if (this.registerData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.registerData.email.hasError('email')){
      return 'Email must be a valid email Address';
    }
  }
  getMessageName(){
    if (this.registerData.name.hasError('required')) {
      return 'Name is required';
    }
    else if(this.registerData.name.hasError('minlength')){
      return 'Name must be a minimum length of 3';
    }
  }
  getMessageMoney(){
    if (this.registerData.money.hasError('required')) {
      return 'Donatable Amount is required';
    }
  }

  getMessagePhone(){
    if (this.registerData.phone.hasError('required')) {
      return 'Phone Number is required';
    }
  }

  getMessageLplace(){
    if (this.registerData.lplace.hasError('required')) {
      return 'Living Place is required';
    }
  }

  constructor(private _authService: AuthService,
    private _donate:DonateService,
    private route: ActivatedRoute,
    private _router: Router,
    private snackbar:MatSnackBar) { 
    }
    ngOnInit() {
      }
  
    registerUser() {
      if(this._authService.getToken()){
        this._authService.getUserId().subscribe((data)=>{
          this.registerUserData.userid=data;
      this.registerUserData.name=this.registerData.name.value;
      this.registerUserData.money=this.registerData.money.value;
      this.registerUserData.phone=this.registerData.phone.value;
      this.registerUserData.email=this.registerData.email.value;
      this.registerUserData.lplace=this.registerData.lplace.value;
      this._donate.donate(this.registerUserData)
      .subscribe(
        res => {
          this.snackbar.open('Your Donation is Successfull, Thank You!', 'Okay!', {
            duration: 4000,
          });
        },
       )
    })
  }
}
}
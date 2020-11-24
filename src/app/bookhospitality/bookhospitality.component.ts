import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BookhospitalityService } from '../bookhospitality.service';

@Component({
  selector: 'app-bookhospitality',
  templateUrl: './bookhospitality.component.html',
  styleUrls: ['./bookhospitality.component.css']
})
export class BookhospitalityComponent implements OnInit {
  hide=true;
  registerUserData = {userid:null, place:"", name:"", nop:"", phone:"", doa:"", dod:"", email: "", tor: "", lplace: ""}

  registerData={
    place:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    nop:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    doa:new FormControl('',[Validators.required]),
    dod:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    tor:new FormControl('',[Validators.required]),
    lplace:new FormControl('',[Validators.required]),
  }
  
  getErrorMessage() {
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
      return 'Name must be a minimum length of 2';
    }
  }
  getMessageNop(){
    if (this.registerData.nop.hasError('required')) {
      return 'Member(s) is required';
    }
  }
  getMessageTor(){
    if (this.registerData.tor.hasError('required')) {
      return 'Type of Room is required';
    }
  }
  getMessagePhone(){
    if (this.registerData.phone.hasError('required')) {
      return 'Phone Number is required';
    }
  }
  getMessageDoa(){
    if (this.registerData.doa.hasError('required')) {
      return 'Date of Arrival is required';
    }
  }
  getMessageDod(){
    if (this.registerData.dod.hasError('required')) {
      return 'Date of Depature is required';
    }
  }
  getMessageLplace(){
    if (this.registerData.lplace.hasError('required')) {
      return 'Living Place is required';
    }
  }

  constructor(private _authService: AuthService,
              private _bookhospitality: BookhospitalityService,
              private route: ActivatedRoute,
              private _router: Router,private snackbar:MatSnackBar) { 
              }

  ngOnInit() {
    let place = this.route.snapshot.params['name'];
    this.registerData.place.setValue(place)
    }

  registerUser() {
    if(this._authService.getToken()){
      this._authService.getUserId().subscribe((data)=>{
        this.registerUserData.userid=data;
        this.registerUserData.place=this.registerData.place.value;
        this.registerUserData.name=this.registerData.name.value;
        this.registerUserData.nop=this.registerData.nop.value;
        this.registerUserData.tor=this.registerData.tor.value;
        this.registerUserData.lplace=this.registerData.lplace.value;
        this.registerUserData.phone=this.registerData.phone.value;
        this.registerUserData.doa=this.registerData.doa.value;
        this.registerUserData.dod=this.registerData.dod.value;
        this.registerUserData.email=this.registerData.email.value;
        this._bookhospitality.bookhospitality(this.registerUserData)
        .subscribe(
          res => {
            this.snackbar.open('Your Hospitality Booked SUCCESSFULL', 'OK', {
              duration: 10000,
            });
            this._router.navigate(['/dashboard'])
          },
          err => {
            if( err instanceof HttpErrorResponse ) {
              if (err.status === 409) {
                this.snackbar.open('Oops! Some thing went wrong.', 'OK', {
                  duration: 10000,
                });
              }
            }
          }
         )
      })
    }
  }
}

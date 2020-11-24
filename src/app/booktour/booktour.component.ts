import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BooktourService } from '../booktour.service';

@Component({
  selector: 'app-booktour',
  templateUrl: './booktour.component.html',
  styleUrls: ['./booktour.component.css']
})
export class BooktourComponent implements OnInit {
  hide=true;
  registerUserData = {userid:null, place:"", name:"", nop:"", lplace:"", phone:"", doa:"", dod:"", email: "" }

  registerData={
    place:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required]),
    nop:new FormControl('',[Validators.required]),
    lplace:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    doa:new FormControl('',[Validators.required]),
    dod:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
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
              private _booktour: BooktourService,
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
        this.registerUserData.lplace=this.registerData.lplace.value;
        this.registerUserData.phone=this.registerData.phone.value;
        this.registerUserData.doa=this.registerData.doa.value;
        this.registerUserData.dod=this.registerData.dod.value;
        this.registerUserData.email=this.registerData.email.value;
        this._booktour.booktour(this.registerUserData)
        .subscribe(
          res => {
            this.snackbar.open('Your Tour Booked SUCCESSFULL', 'OK', {
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

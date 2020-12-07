import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  form={name:null,dob:null,addr:null,city:null,gender:null,pincode:null,phone:null,email:null}
  constructor(private auth:AuthService, private _router:Router,private snackbar:MatSnackBar) {
  }

  registerUserData={
    name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    dob:new FormControl('',[Validators.required]),
    addr:new FormControl('',[Validators.required]),
    gender:new FormControl('',[Validators.required]),
    city:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
  }

  getErrorName() {
    if (this.registerUserData.name.hasError('required')) {
      return 'Name is required';
    }
    else if(this.registerUserData.name.hasError('minlength')){
      return 'Name must be a minimum length of 3';
    }
  }

  getErrorDob(){
    if (this.registerUserData.dob.hasError('required')) {
      return 'Date of Birth is Required';
    }
  }

  getErrorGender(){
    if (this.registerUserData.gender.hasError('required')) {
      return 'Filling this field is required';
    }
  }

  getErrorAddr() {
    if (this.registerUserData.addr.hasError('required')) {
      return 'Address is Required';
    }
    else if(this.registerUserData.addr.hasError('minlength')){
      return 'Name must be a minimum length of 2';
    }
  }

  getErrorCity(){
    if (this.registerUserData.city.hasError('required')) {
      return 'City is Required';
    }
    else if(this.registerUserData.city.hasError('minlength')){
      return 'Name must be a minimum length of 2';
    }
  }

  getErrorPin(){
    if (this.registerUserData.pincode.hasError('required')) {
      return 'Pincode is Required';
    }
    else if(this.registerUserData.pincode.hasError('pattern')){
      return 'Pincode Must be 6 Digits';
    }
    else if(this.registerUserData.pincode.hasError('pattern')){
      return 'Pincode Must be 6 Digits';
    }
  }

  getErrorPhone(){
    if (this.registerUserData.phone.hasError('required')) {
      return 'Mobile No. is Required';
    }
    else if(this.registerUserData.phone.hasError('pattern')){
      return 'Mobile No. Must be 10 Digits';
    }
    else if(this.registerUserData.phone.hasError('pattern')){
      return 'Mobile No. Must be 10 Digits';
    }
  }

  getErrorEMail() {
    if (this.registerUserData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.registerUserData.email.hasError('email')){
      return 'Email must be a valid email Address';
    }
  }

  ngOnInit(): void {
    this.auth.getUserId().subscribe((res)=>{
      this.auth.getProfile(res).subscribe((data:any)=>{
        this.registerUserData.name.setValue(data.name);
        this.registerUserData.addr.setValue(data.addr);
        this.registerUserData.dob.setValue(data.dob);
        this.registerUserData.gender.setValue(data.gender);
        this.registerUserData.city.setValue(data.city);
        this.registerUserData.pincode.setValue(data.pincode);
        this.registerUserData.phone.setValue(data.phone);
        this.registerUserData.email.setValue(data.email);
      })
    });
  }

  onSubmit(){
    this.form.name=this.registerUserData.name.value;
    this.form.dob=this.registerUserData.dob.value;
    this.form.addr=this.registerUserData.addr.value;
    this.form.gender=this.registerUserData.gender.value;
    this.form.city=this.registerUserData.city.value;
    this.form.pincode=this.registerUserData.pincode.value;
    this.form.phone=this.registerUserData.phone.value;
    this.form.email=this.registerUserData.email.value; 
    this.auth.getUserId().subscribe((res)=>{
      this.auth.editProfile(res,this.form).subscribe(
        (res)=>{
          this._router.navigate(['/profile'])
          this.snackbar.open('Profile details have been updated', 'Okay!', {
            duration: 4000,
          });
        }
      );
    });
  }

}
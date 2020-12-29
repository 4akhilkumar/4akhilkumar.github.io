import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TermsandconditionsComponent } from '../termsandconditions/termsandconditions.component';
import { RecaptchaErrorParameters, RecaptchaFormsModule } from "ng-recaptcha";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  token;
  hide=true;
  registerUserData = { name: "", email: "", password: "" }
  
  registerData={
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  }
  
  openDialogTandC(){
    this.dialog.open(TermsandconditionsComponent,{width:'500px',height:'700px'})
  }
 
  getErrorMessage() {
    if (this.registerData.email.hasError('required')) {
      return 'Email is required';
    }
    else if(this.registerData.email.hasError('email')){
      return 'Email must be a valid email Address';
    }
  }
  getError(){
    if (this.registerData.password.hasError('required')) {
      return 'Password is required';
    }
    else if(this.registerData.password.hasError('minlength')){
      return 'Password must be a minimum length of 8 and should contain Upper & Lower Cases with Characters';
    }
  }
  getMessage(){
    if (this.registerData.name.hasError('required')) {
      return 'Name is required';
    }
    else if(this.registerData.name.hasError('minlength')){
      return 'Name must be a minimum length of 3';
    }
  }

  constructor(private _auth: AuthService,
              public dialog: MatDialog,
              private _router: Router,
              private _renderer: Renderer2,
              private _http: HttpClient,
              private snackbar:MatSnackBar) { }
  
  reactiveForm: FormGroup;
  
  // public resolved(captchaResponse: string): void {
  //   console.log(`Resolved captcha with response: ${captchaResponse}`);
  //   this.token = captchaResponse;
  // }

  public onError(errorDetails: RecaptchaErrorParameters): void {
    console.log(`reCAPTCHA error encountered; details:`, errorDetails);
  }

  ngOnInit(): void {
    let srcipt = this._renderer.createElement('script');
    srcipt.defer = true;
    srcipt.async = true;
    srcipt.src="https://www.google.com/recaptcha/api.js";
    this._renderer.appendChild(document.body, srcipt);
    this.reactiveForm = new FormGroup({
      recaptchaReactive: new FormControl(null, Validators.required),
    });
  }

  resolved(token) {
    console.log(token);
    this.token = token;
  }

  verify(){
    console.log(this.token);
    this._http.post('http://localhost:3000/verify',{token: this.token}).subscribe(
      res => {
        console.log("success or not ?", res);
      }
    )
  }

  registerUser() {
    this.registerUserData.email=this.registerData.email.value;
    this.registerUserData.name=this.registerData.name.value;
    this.registerUserData.password=this.registerData.password.value;
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        this.snackbar.open('You have Registered Successfully', 'Okay!', {
          duration: 4000,
        });
        localStorage.setItem('token', res.token)
        this._router.navigate(['/welcome'])
      },
      err => {
        if( err instanceof HttpErrorResponse ) {
          if (err.status === 409) {
            this.snackbar.open('E - Mail Already Registered', 'Okay!', {
              duration: 4000,
            });
            this.registerData.email.reset();
            this.registerData.name.reset();
            this.registerData.password.reset();
            this.registerUserData.email="";
            this.registerUserData.name="";
            this.registerUserData.password="";
          }
        }
      }
    )      
  }
}  
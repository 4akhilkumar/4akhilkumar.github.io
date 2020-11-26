import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _authService: AuthService,
    public dialog: MatDialog,
    private _router: Router,private snackbar:MatSnackBar) { }
  
  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      console.log('true')
      return true
    } else {
      console.log('false')            
      // this._router.navigate(['/login'])
      this.dialog.open(TermsandconditionsComponent,{width:'500px',height:'700px'})
      this.snackbar.open('Please Login','Okay!',{
        duration: 5000,
      });
      return false
    }
  }
}
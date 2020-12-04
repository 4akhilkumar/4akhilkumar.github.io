import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "https://whin.herokuapp.com/user/register";
  private _loginUrl = "https://whin.herokuapp.com/user/login";

  constructor(private http: HttpClient,
    private _router: Router) { }

    registerUser(user) {
      return this.http.post<any>(this._registerUrl, user)
    }
  
    loginUser(user) {
      return this.http.post<any>(this._loginUrl, user)
    }
  
    logoutUser() {
      localStorage.removeItem('token')
      this._router.navigate(['/welcome'])
    }
  
    getToken() {
      return localStorage.getItem('token')
    }
  
    loggedIn() {
      return !!localStorage.getItem('token')    
    }

    getUserId(){
      return this.http.get("https://whin.herokuapp.com/user/userid",{
        params:new HttpParams().append('token',localStorage.getItem('token'))
      })
    }

    getUserName(id){
      return this.http.get(`https://whin.herokuapp.com/user/username/${id}`)
    }

    getName(id){
      return this.http.get(`https://whin.herokuapp.com/user/name/${id}`)
    }

    getProfile(id){
      return this.http.get<any>(`https://whin.herokuapp.com/user/profile/${id}`)
    }

    editProfile(id,user){
      return this.http.patch<any>(`https://whin.herokuapp.com/user/edit-profile/${id}`,user);
    }

    deleteaccount(id){
      return this.http.delete<any>(`https://whin.herokuapp.com/user/delete/${id}`)
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient,
    private _router: Router) { }
    contactus(link3){
      return this.http.post("http://localhost:3000/contactus/contactus",link3)
    }
}
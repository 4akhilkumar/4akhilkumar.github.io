import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DonateService {  
  constructor(private http: HttpClient,
  private _router: Router) { }
    donate(link2){
      return this.http.post("http://localhost:3000/donate/donate",link2)
    }
    getdonate(id){
      return this.http.get(`http://localhost:3000/donate/getdonates/${id}`)
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooktourService {
  constructor(private http: HttpClient,
    private _router: Router) { }
    booktour(linkbtour){
      console.log(linkbtour)
      return this.http.post("http://localhost:3000/booktour/booktour",linkbtour)
    }
    getbooking(id){
      return this.http.get(`http://localhost:3000/booktour/getbooktours/${id}`)
    }
}

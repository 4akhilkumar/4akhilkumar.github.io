import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooktravelService {
  constructor(private http: HttpClient,
    private _router: Router) { }
    booktravel(linkbtravel){
      console.log(linkbtravel)
      return this.http.post("http://localhost:3000/booktravel/booktravel",linkbtravel)
    }

    getbooking(id){
      return this.http.get(`http://localhost:3000/booktravel/getbooktravels/${id}`)
    }
}
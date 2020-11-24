import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookhospitalityService {
  constructor(private http: HttpClient,
    private _router: Router) { }
    bookhospitality(linkbhos){
      console.log(linkbhos)
      return this.http.post("http://localhost:3000/bookhospitality/bookhospitality",linkbhos)
    }
    getbooking(id){
      return this.http.get(`http://localhost:3000/bookhospitality/getbookhospitalitys/${id}`)
    }
}

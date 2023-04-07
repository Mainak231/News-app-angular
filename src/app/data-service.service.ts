import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private _url_country='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=17ad405cfb3948958b00468365eb6349';
  private _url_home = 'https://newsapi.org/v2/everything?domains=hindustantimes.com&apiKey=17ad405cfb3948958b00468365eb6349'

  constructor(private _http:HttpClient) { }

  getNewsDataCountry ():Observable<any>{
    return this._http.get(this._url_country);
  }
  getNewsData():Observable<any>{
    return this._http.get(this._url_home);
  }
}

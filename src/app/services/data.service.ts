import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<HttpResponse> {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }
}

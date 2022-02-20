import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  fetchdata() {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }
  private _baseUrl = "https://jsonplaceholder.typicode.com/posts"

  getapidata(){
    return this.http.get(this._baseUrl);
  }

  subjectValue =  new BehaviorSubject('abc')
}


import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { admin } from './admin.model';
const login_url='http://localhost:9087/user/jjj';
const httpOptions={
  headers: new HttpHeaders({
      'Content-Type' : 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  log(userl: admin) {
    throw new Error("Method not implemented.");
  }
  constructor(private http: HttpClient) { }
  private extractData(res : Response){
    let contents=res;
    //check if contents are not null
    return contents || { };
  }
  loginCheck1(login: admin):Observable<any>{
    console.log("ggggg");
    console.log(login.min);
    console.log(login.max);
    return this.http.post(login_url,JSON.stringify(login),httpOptions).pipe(map(this.extractData))
  
  }
}

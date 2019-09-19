import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Length } from './length';
import { map } from 'rxjs/operators';
const allLengthsUrl = "http://localhost:9087/user/lengths";
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ArctService {

  constructor(private http: HttpClient) { }
  private extractData(res : Response){
    let contents=res;
    return contents || { };
  }

  getLength1():Observable<any>{
    return  this.http.get(allLengthsUrl,httpOptions).pipe(map(this.extractData));
		
	}
}

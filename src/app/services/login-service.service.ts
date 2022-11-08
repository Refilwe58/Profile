import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
private _loginUrl = "http://3.88.53.196:3100/api/v1/login";
api='http://localhost:3100/api/v1/login'

private tokenKey:string ='app_token';

private store(content:object){
  localStorage.setItem(this.tokenKey,JSON.stringify(content));

}
  constructor(private http:HttpClient) { }

  loginUser(user: any):Observable<any>{
    return this.http.post(`${this.api}`,user)
    .pipe(catchError(this.handleError));
  }

  handleError(error:any){
    return throwError(error.message || "server error")
  }
}

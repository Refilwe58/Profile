import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable,pipe, throwError } from 'rxjs';
import { LoginServiceService } from '../services/login-service.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   constructor(private _http: HttpClient) { }
   /**
   private tokenKey:string='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbHVtbmlfbmFtZSI6ImNoYXJsaWUiLCJpYXQiOjE2NjY4NDE3Nzl9.E-6PvSkuKJT2r0hHTd2jH_ZmxE67kIvqXmW8EeWqEhA';

   privatestore(content:object){
    localStorage.setItem(this.tokenKey,JSON.stringify(content));
   }
  */

  apiUrl='http://3.88.53.196:3100/api/v1/viewProfile';
  apis='http://localhost:3100/api/v1/viewProfile';

  handleError(error:any){
    return throwError(error.message || "server error")
  }
  gettoken(){
  return localStorage.getItem('token')
  }

  getToken(): string {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: string) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

  buildHeaders(): HttpHeaders {

    let headersConfig={}
    if (this.getToken()) {
       headersConfig = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':'Token '+ `${this.getToken()}`
      };
    }
    return new HttpHeaders(headersConfig);
  }


  getAllData()
  {
    //let tokens=this.gettoken()!.toString()
   // let head_obj=new HttpHeaders().set("Authorization",tokens)
    return this._http.get(this.apis/*,{withCredentials:true}*/).pipe(catchError(this.handleError));
    /*return this._http.get(`${this.apis}`,{observe:'body',params:new HttpParams().append('Authorization',`${localStorage.getItem('token')}`)
  }) .pipe(catchError(this.handleError));*/

  //{headers:head_obj}
  }
}

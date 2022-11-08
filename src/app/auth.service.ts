import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


 // loggedIn: BehaviorSubject<boolean>
  api='http://localhost:3100/api/v1/login'
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
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization':''
    };

    if (this.getToken()) {
      headersConfig['Authorization'] = `Token ${this.getToken()}`;
    }
    return new HttpHeaders(headersConfig);
  }


  login(user: any):Observable<any> {
    return this.http.post(`${this.api}`,user);
  }

  logout() {
    this.destroyToken();
    //this.loggedIn.next(false);
  }

  constructor( private http: HttpClient,/*private toastr: ToastrService*/) {
    const jwtToken = this.getToken();
    //this.loggedIn = new BehaviorSubject<boolean>jwtToken ? true : false);
  }
}

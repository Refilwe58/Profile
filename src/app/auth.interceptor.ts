import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostService } from './service/post.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private postService:PostService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   const token=this.postService.gettoken()
   if(token){
      request=request.clone({
        //setHeaders:{Authorization:`${this.postService.gettoken()}`}
        headers:request.headers.set('Authorization',`${this.postService.gettoken()}`)
        //headers: request.headers.set('Authorization',`Bearer ${this.postService.gettoken()}`)
      })
      return next.handle(request);
    }
    else{
    return next.handle(request);
    }
  }
}
/*export const AuthInterceptorProvider={
  provide:HTTP_INTERCEPTORS,

  useClass:AuthInterceptor,
  multi:true,
 };*/

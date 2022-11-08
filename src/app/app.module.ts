import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import{HttpHeaders} from '@angular/common/http';
import { PostService } from './service/post.service';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './services/login-service.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor, /*AuthInterceptorProvider*/ } from './auth.interceptor';
import { AuthService } from './auth.service';







@NgModule({
  declarations: [

    AppComponent,
    ViewProfileComponent,
    FooterComponent,
    NavbarComponent,
    EventsComponent,
    GalleryComponent,
    LoginComponent


  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule



  ],
  providers: [PostService,
  LoginServiceService,AuthService ,/*{
    provide:HTTP_INTERCEPTORS,
   useClass:AuthInterceptor,
  multi:true,}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
/**/

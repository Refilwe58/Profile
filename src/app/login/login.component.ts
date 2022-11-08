import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { Token } from '@angular/compiler';
import {Observable, pipe, Subject, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;


constructor(private loginService:LoginServiceService,private authService:AuthService){}
  ngOnInit(): void {
    this.initForm();
   }

  initForm(){
    this.formGroup=new FormGroup({
email: new FormControl('',[Validators.required]),
password: new FormControl('',[Validators.required])

    })
  }
  loggedIn:Subject<boolean> = new Subject
  loginProcess(){
    if(this.formGroup.valid){
      // this.loginService.loginUser(this.formGroup.value).subscribe(result=>{
        this.authService.login(this.formGroup.value).subscribe(result=>{
        console.log(result);
        this.loggedIn.next(true);
      this.authService.saveToken(result.token)
         //localStorage.setItem('token',result.toString());
        // console.log(localStorage.getItem('token'))
        this.loggedIn.next(true);


      },
      (error)=>{
        console.log(error)
        this.loggedIn.next(false);
      }

      )};
    }

  }


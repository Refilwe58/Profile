import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{HttpHeaders} from '@angular/common/http';
import { PostService } from '../service/post.service';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})

export class ViewProfileComponent implements OnInit{
	token:any;
/**
saveData(){
	let tokenKey='http://3.88.53.196:3100/api/v1/viewProfile?eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhbHVtbmlfbmFtZSI6ImNoYXJsaWUiLCJpYXQiOjE2NjY4NDYyOTR9.YAC8lc1uAnKzNAE8-NtgykCP8YGF8mH81nu0ON3Mn7c';

	 localStorage.setItem('token',JSON.stringify(tokenKey));
	}
	loadData()
	{
		let tokenKey: any =localStorage.getItem('token');
		this.token = JSON.parse(tokenKey);
	}
	*/
	constructor(private _postservice:PostService){}
  data=''
	ngOnInit(){

		this._postservice.getAllData().subscribe((res)=>{
			this._postservice.saveToken(window.localStorage['jwtToken'])
      this._postservice.buildHeaders()
      console.log(res,"res==>");
		},
    (error)=>{
      console.log(error)
    })
	}

  url:any;
 //Angular 11, for stricter type
	msg = "";

	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}

		var mimeType = event.target.files[0].type;


		if(event.target.files && event.target.files[0]){
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;

		}
	}


}
}

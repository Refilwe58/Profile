import { Component, OnInit } from '@angular/core';
import {map, startWith} from "rxjs/operators";
declare var filtering:any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  ngOnInit(): void {
    new filtering();
  }
  
  

  


 

  headerTitle:string = "#GALLERY";
  headerDescription:string="Read, watch, listen. #TUT_ALUMNI ahare their experiences, perspectives, and commnunity engagements.";
  backgroundImg:string="";

  
}
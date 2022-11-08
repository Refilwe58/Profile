import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isShowDivIf = true;
  toggleDisplayDivIf() {
    this.isShowDivIf = !this.isShowDivIf;

  }




}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  headerTitle:string = "#EVENTS";
  headerDescription:string="Read, watch, listen. #TUT_ALUMNI ahare their experiences, perspectives, and commnunity engagements.";
  backgroundImg:string="";

  ngOnInit(): void {
  }

}

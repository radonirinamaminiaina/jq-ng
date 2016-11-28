import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { HttpRequestService } from './http-request.service';
declare var JQFullcalendar: any;
let jqFullcalendar = new JQFullcalendar();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{
  constructor(private http: HttpRequestService) {}
  ngAfterViewInit() {
    jqFullcalendar.drawCalendar(".fullCalendar");
    // call eventCreate
    jqFullcalendar.callEvent("eventCreate", (event, data) => {
      jqFullcalendar.renderEvent(".fullCalendar", data);
    });
    // call new event for current month
    jqFullcalendar.callEvent("currentData", (event, month) => {
      jqFullcalendar.method("removeEvents");
      this.http.get("/data/" + month + ".json").subscribe(
        (response) => {
          for (let i = 0; i < response["length"]; i++) {
            jqFullcalendar.renderEvent(".fullCalendar", response[i]);
          }
        }
      )
    })
  }
}

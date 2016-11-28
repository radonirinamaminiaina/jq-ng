import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpRequestService } from './http-request.service';
import { AppComponent } from './app.component';
import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';

@NgModule({
  declarations: [
    AppComponent,
    FullcalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

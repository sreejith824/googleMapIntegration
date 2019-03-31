import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDay57vZT0FhlIfT82qKsbtQkV9dVMM7kg'
    })
  ],
  providers: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
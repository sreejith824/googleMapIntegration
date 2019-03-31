//import { Component } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { ViewChild, ElementRef, NgZone, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  /*title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  fromLocation = "";
  toLocation = "";
  */
 title = 'app';
  @ViewChild('places') places: GooglePlaceDirective;
    @ViewChild('search' ) public searchElement: ElementRef;
    lat: number = -33.785809;
    lng: number = 151.121195;
    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {  }
    public handleAddressChange() {
        
    }
}

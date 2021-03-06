//import { Component } from '@angular/core';
import { Component, OnInit, Input } from "@angular/core";
import { MapsAPILoader } from "@agm/core";
import { } from "@types/googlemaps";
import { ViewChild, ElementRef, NgZone } from "@angular/core";
import { FormControl } from "@angular/forms";
import { GooglePlaceDirective } from "ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive";
import { Address } from "ngx-google-places-autocomplete/objects/address";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Google map app";
  @ViewChild("places") places: GooglePlaceDirective;
  @ViewChild("search") public searchElement: ElementRef;
  fromAddress: Address;
  toAddress: Address;
  distance: number = 0;
  lat: number;
  lng: number;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }
  public handleFromAddressChange(fromAddress: Address) {
    this.fromAddress = fromAddress;
    this.lng = fromAddress.geometry.location.lng();
    this.lat = fromAddress.geometry.location.lat();
    console.log(JSON.stringify(this.fromAddress));
  }

  public handleToAddressChange(toAddress: Address) {
    this.toAddress = toAddress;
    console.log(JSON.stringify(this.toAddress));
    this.lng = toAddress.geometry.location.lng();
    this.lat = toAddress.geometry.location.lat();
  }
  public calculateDistace() {
    if (this.fromAddress && this.toAddress) {

      this.distance = this.distanceInKmBetweenEarthCoordinates(
        this.fromAddress.geometry.location.lat(),
        this.fromAddress.geometry.location.lng(),
        this.toAddress.geometry.location.lat(),
        this.toAddress.geometry.location.lng()
      );
      console.log("Distance : " + this.distance);
    }
  }

  public degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  public distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    var earthRadiusKm = 6371;

    var dLat = this.degreesToRadians(lat2 - lat1);
    var dLon = this.degreesToRadians(lon2 - lon1);

    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }
}

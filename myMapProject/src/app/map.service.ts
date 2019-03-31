import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }
  getCurrentCordinate() {
    return {
      currentLattitude : "9.9312328",
      currentLongitude : "76.26730410000005"
    }
  }
}

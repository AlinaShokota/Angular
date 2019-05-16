import { Component, OnInit } from '@angular/core';
import {TripService} from '../shared/service/trip.service';
import {ActivatedRoute} from '@angular/router';
import {Trip} from '../shared/model/trip';

@Component({
  selector: 'app-trip-by-country',
  templateUrl: './trip-by-country.component.html',
  styleUrls: ['./trip-by-country.component.css']
})
export class TripByCountryComponent implements OnInit {

  constructor(private tripService: TripService, private route: ActivatedRoute) { }
  trips: Trip[] = new Array();
  country: string = '';
  ngOnInit() {
    const name = this.route.snapshot.paramMap.get('name');
    this.country = name;
    console.log('name: ' + name);
    if (name) {
      this.tripService.getTripsByCountry(name).subscribe(value => {
        console.log(value);
        this.trips = value;
      });
    }
  }

}

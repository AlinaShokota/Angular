import { Component, OnInit } from '@angular/core';
import {TripService} from '../shared/service/trip.service';
import {ActivatedRoute} from '@angular/router';
import {Trip} from '../shared/model/trip';

@Component({
  selector: 'app-trips-by-continent',
  templateUrl: './trips-by-continent.component.html',
  styleUrls: ['./trips-by-continent.component.css']
})
export class TripsByContinentComponent implements OnInit {

  constructor(private tripService: TripService, private route: ActivatedRoute) { }
  trips: Trip[] = new Array();
  continent: string = '';
  ngOnInit() {
    const continentName = this.route.snapshot.paramMap.get('continentName');
    this.continent = continentName;
    console.log('continentName: ' + continentName);
    if (continentName) {
      this.tripService.getTripsByContinent(continentName).subscribe(value => {
        console.log(value);
        this.trips = value;
      });
    }
  }

}

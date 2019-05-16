import {Component, OnInit} from '@angular/core';
import {TripService} from '../shared/service/trip.service';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from '../shared/service/image.service';
import {Trip} from '../shared/model/trip';

@Component({
  selector: 'app-trip-search',
  templateUrl: './trip-search.component.html',
  styleUrls: ['./trip-search.component.css']
})
export class TripSearchComponent implements OnInit {

  constructor(private tripService: TripService, private route: ActivatedRoute) {
  }

  trips: Trip[] = new Array();
  c: number = 0;
  from: string = '';
  to: string = '';

  ngOnInit() {
    const fromParam = this.route.snapshot.paramMap.get('countOfDays').toString();
    console.log(fromParam);
    this.from = fromParam;
    if (fromParam) {
      this.tripService.getTripsByAirportFromCity(fromParam).subscribe(value => {
        console.log(value);
        this.trips = value;
      });
      this.tripService.getTripsByAirportToCity(fromParam).subscribe(value => {
        console.log(value);
        this.trips = value;
      });
      this.tripService.getTripsByDepartureDate(fromParam).subscribe(value => {
        console.log(value);
        this.trips = value;
      });
    }

    const countParam = this.route.snapshot.paramMap.get('countOfDays');
    console.log(countParam);
    const count: number = parseInt(countParam, 10);
    this.c = count;
    if (count) {
      this.tripService.getTripsByCountOfDays(count).subscribe(value => {
        console.log(value);
        this.trips = value;
      });
    }

  }
}


